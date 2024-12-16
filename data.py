from datetime import datetime

# Dummy data for robots
robot_data = [
    {
        "Robot ID": "63e06a27-8fb5-49b6-afdd-555d6a01f131",
        "Online/Offline": False,
        "Battery Percentage": 40,
        "CPU Usage": 25,
        "RAM Consumption": 5514,
        "Last Updated": "2024-12-11 11:19:51",
        "Location Coordinates": [
            34.946804,
            -1.265231
        ]
    },
    {
        "Robot ID": "fbe83522-ea53-4869-97cb-d8cb40007f83",
        "Online/Offline": False,
        "Battery Percentage": 59,
        "CPU Usage": 77,
        "RAM Consumption": 6243,
        "Last Updated": "2024-12-11 10:50:10",
        "Location Coordinates": [
            13.700687,
            -50.895561
        ]
    },
    {
        "Robot ID": "ab465182-3288-4d91-a2bf-3b7448d1b9f0",
        "Online/Offline": False,
        "Battery Percentage": 60,
        "CPU Usage": 34,
        "RAM Consumption": 3845,
        "Last Updated": "2024-12-11 10:41:02",
        "Location Coordinates": [
            31.0267,
            56.005055
        ]
    },
    {
        "Robot ID": "96881d11-7a06-4275-b64b-ad26f935111a",
        "Online/Offline": False,
        "Battery Percentage": 65,
        "CPU Usage": 13,
        "RAM Consumption": 7000,
        "Last Updated": "2024-12-11 10:55:50",
        "Location Coordinates": [
            -54.823863,
            -2.796469
        ]
    },
    {
        "Robot ID": "225b4c2b-12c7-4649-a61e-5fde5e96c555",
        "Online/Offline": True,
        "Battery Percentage": 28,
        "CPU Usage": 31,
        "RAM Consumption": 7007,
        "Last Updated": "2024-12-11 10:49:20",
        "Location Coordinates": [
            -2.136094,
            56.199452
        ]
    },
    
]

# Convert 'Location Coordinates' to string if needed
for robot in robot_data:
    robot["Location Coordinates"] = ",".join(map(str, robot["Location Coordinates"]))
    
# Convert 'Last Updated' to datetime
for robot in robot_data:
    robot["Last Updated"] = datetime.strptime(robot["Last Updated"], "%Y-%m-%d %H:%M:%S")

# Sort robots by Battery Percentage
sorted_robots = sorted(robot_data, key=lambda x: x["Battery Percentage"], reverse=True)

# Filter online robots
online_robots = [robot for robot in robot_data if robot["Online/Offline"]]

# Print sorted robots and online robots
print("Sorted Robots by Battery Percentage:", sorted_robots)
print("Online Robots:", online_robots)
