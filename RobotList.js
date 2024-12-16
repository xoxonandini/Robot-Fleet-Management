import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './RobotList.css';

const RobotList = ({ robots }) => {
  return (
    <div className="robot-list">
      <h2>Robot Fleet</h2>
      <ul>
        {robots.map((robot) => (
          <li key={robot["Robot ID"]} className={`robot ${robot["Online/Offline"] === "Online" ? "online" : "offline"}`}>
            <h3>Robot {robot["Robot ID"]}</h3>
            <p>Status: {robot["Online/Offline"]}</p>
            <p>Battery: {robot["Battery Percentage"]}%</p>
            <p>CPU Usage: {robot["CPU Usage"]}%</p>
            <p>RAM Usage: {robot["RAM Consumption"]}%</p>
            <p>Location: {robot["Location Coordinates"]}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

RobotList.propTypes = {
  robots: PropTypes.array.isRequired,
};

export default RobotList;
