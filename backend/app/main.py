from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
from typing import List

app = FastAPI(title="Vaibhav Mankar Portfolio API", version="1.0.0")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

PROFILE = {
    "name": "Vaibhav Mankar",
    "title": "Data Analytics Engineer",
    "email": "vaibhavmankar57@gmail.com",
    "linkedin": "https://www.linkedin.com/in/vaibhav-mankar-792b561b8/",
    "github": "https://github.com/vaibhavmankar05",
}

PROJECTS = [
    {"id": "fmcg-analytics", "title": "FMCG Sales Analytics Dashboard", "category": "BI"},
    {"id": "healthcare-analytics", "title": "Healthcare Analytics Dashboard", "category": "BI"},
    {"id": "banking-analytics", "title": "Banking & Credit Card Analytics", "category": "BI"},
    {"id": "compliance-automation", "title": "Compliance Document Sourcing & Automation", "category": "Automation"},
    {
        "id": "geofencing-tracker",
        "title": "Real-Time Geofencing & Tracker Monitoring Platform",
        "category": "Backend / Real-Time"
    },

]

class ContactMessage(BaseModel):
    name: str
    email: EmailStr
    message: str

@app.get("/api/health")
def health():
    return {"status": "ok", "service": "portfolio-api"}

@app.get("/api/profile")
def profile():
    return PROFILE

@app.get("/api/projects")
def projects():
    return {"projects": PROJECTS}

@app.post("/api/contact")
def contact(payload: ContactMessage):
    # Production note: connect this endpoint to an email provider or database before enabling it publicly.
    return {"accepted": True, "message": "Thanks. Your message was received by the API layer."}
