import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import PropTypes from 'prop-types';
import './MapView.css';

const MapView = ({ robots }) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    // Initialize the Leaflet map
    const newMap = L.map('map', {
      center: [51.505, -0.09],
      zoom: 2,
    });

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
    }).addTo(newMap);

    setMap(newMap);

    return () => {
      newMap.remove(); // Cleanup the map on component unmount
    };
  }, []);

  useEffect(() => {
    if (map) {
      // Clear any existing markers to prevent duplication
      map.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
          map.removeLayer(layer);
        }
      });

      // Add markers for each robot
      robots.forEach((robot) => {
        const coords = robot["Location Coordinates"]; // Directly access the coordinates array

        if (Array.isArray(coords) && coords.length === 2) {
          const [lat, lon] = coords;

          // Check if lat and lon are valid numbers
          if (typeof lat === 'number' && typeof lon === 'number') {
            L.marker([lat, lon])
              .addTo(map)
              .bindPopup(
                `<strong>Robot ID:</strong> ${robot["Robot ID"]}<br />
                 <strong>Status:</strong> ${robot["Online/Offline"] ? 'Online' : 'Offline'}<br />
                 <strong>Battery:</strong> ${robot["Battery Percentage"]}%`
              );
          } else {
            console.warn(`Invalid coordinates for Robot ${robot["Robot ID"]}:`, coords);
          }
        } else {
          console.warn(`Missing or invalid coordinates for Robot ${robot["Robot ID"]}:`, coords);
        }
      });
    }
  }, [map, robots]);

  return <div id="map" className="map-container"></div>;
};

MapView.propTypes = {
  robots: PropTypes.array.isRequired,
};

export default MapView;
