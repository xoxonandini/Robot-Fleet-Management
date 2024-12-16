import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import WebSocketProvider from './components/WebSocketProvider';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <WebSocketProvider>
    <App />
  </WebSocketProvider>
);
