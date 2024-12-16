import React, { createContext, useEffect, useState, useContext } from 'react';

export const WebSocketContext = createContext(null);

const WebSocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [robots, setRobots] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8000');
    setSocket(ws);

    ws.onopen = () => console.log('WebSocket connection established');
    ws.onmessage = (event) => {
      const message = JSON.parse(event.data);
      console.log('WebSocket message received:', message);

      if (message.type === 'robot_update') {
        setRobots((prevRobots) =>
          prevRobots.map((robot) =>
            robot.id === message.payload.id ? message.payload : robot
          )
        );
      }
    };

    ws.onerror = (err) => console.error('WebSocket error:', err);
    ws.onclose = () => console.log('WebSocket connection closed');

    return () => {
      if (ws.readyState === WebSocket.OPEN) {
        ws.close();
      }
    };
  }, []);

  useEffect(() => {
    const fetchRobots = async () => {
      try {
        const response = await fetch('http://localhost:8000/robots');
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setRobots(data);
      } catch (err) {
        console.error('Failed to fetch robots:', err);
        setError('Failed to fetch robots data. Please try again later.');
      }
    };

    fetchRobots();
  }, []);

  return (
    <WebSocketContext.Provider value={{ socket, robots, error }}>
      {children}
    </WebSocketContext.Provider>
  );
};

export const useWebSocket = () => {
  const context = useContext(WebSocketContext);
  if (!context) {
    throw new Error('useWebSocket must be used within a WebSocketProvider');
  }
  return context;
};

export default WebSocketProvider;
