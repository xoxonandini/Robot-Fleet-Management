This project is a Fleet Monitoring Dashboard designed to visualize the status and telemetry data of multiple robots in real-time. It includes the following features:

Robot Information: Displays a list of robots with details such as Robot ID, online/offline status, battery percentage, CPU usage, RAM consumption, last updated timestamp, and location coordinates.
Real-Time Updates: Uses WebSockets or periodic polling (every 5 seconds) to update the robot data in real-time.
Map View: Integrates a map using Leaflet.js  to visualize the robots' current positions.
Frontend: Built with React.js for a clean, responsive dashboard. Robots with low battery or offline status are highlighted for easy identification.
Backend: Uses FastAPI to simulate telemetry data for up to 10 robots, generating mock data for battery, CPU, RAM, and position coordinates, and exposes a WebSocket/REST API for real-time updates.
