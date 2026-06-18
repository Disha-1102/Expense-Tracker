from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from fastapi.security import OAuth2PasswordRequestForm

import models
import schemas

from database import get_db
from auth import (
    hash_password,
    verify_password,
    create_access_token
)
router = APIRouter()
@router.post("/register")
def register(user: schemas.UserCreate, db: Session = Depends(get_db)):

    existing_user = db.query(models.User).filter(
        models.User.email == user.email
    ).first()

    print("Existing user:", existing_user)

    if existing_user:
        return {"message": "Email already registered"}

    new_user = models.User(
        name=user.name,
        email=user.email,
        password=hash_password(user.password)
    )

    db.add(new_user)
    db.commit()

    return {"message": "User registered successfully"}
@router.post("/login")
def login(
        form_data: OAuth2PasswordRequestForm = Depends(),
        db: Session = Depends(get_db)):

    print("Entered username:", form_data.username)

    db_user = db.query(models.User).filter(
        models.User.email == form_data.username
    ).first()

    print("User found:", db_user)

    if not db_user:
        return {"message": "User not found"}

    if not verify_password(
            form_data.password,
            db_user.password):

        return {"message": "Incorrect password"}

    access_token = create_access_token(
        data={"sub": db_user.email}
    )

    return {
        "access_token": access_token,
        "token_type": "bearer"
    }
