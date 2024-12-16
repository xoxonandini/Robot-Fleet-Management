from fastapi import FastAPI
from pydantic import BaseModel
from data import robot_data  # Importing robot data from data.py
from starlette.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins (use specific URLs in production)
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)


# Pydantic model for validation (optional)
class Robot(BaseModel):
    Robot_ID: int
    Online_Offline: str
    Battery_Percentage: int
    CPU_Usage: int
    RAM_Consumption: int
    Last_Updated: str
    Location_Coordinates: str

@app.get("/robots")
def get_robots():
    # Returning robot data from the imported data.py file
    return robot_data
    
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
