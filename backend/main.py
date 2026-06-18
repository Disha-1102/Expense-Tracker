from fastapi import FastAPI
from database import engine, Base
import models
from routers import users
from routers import expenses
from routers import budgets
from routers import dashboard
from fastapi.middleware.cors import CORSMiddleware

Base.metadata.create_all(bind=engine)

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(users.router)
app.include_router(expenses.router)
app.include_router(budgets.router)
app.include_router(dashboard.router)
@app.get("/")
def home():
    return {"message": "Welcome to Smart Expense Tracker!"}