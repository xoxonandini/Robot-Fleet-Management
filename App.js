import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import RobotList from './components/RobotList';
import MapView from './components/MapView';
import { useWebSocket } from './components/WebSocketProvider';

const App = () => {
  const { robots } = useWebSocket();

  return (
    <div className="App">
      <h1>Robot Fleet Management</h1>
      <RobotList robots={robots} />
      <MapView robots={robots} />
    </div>
  );
};

export default App;
