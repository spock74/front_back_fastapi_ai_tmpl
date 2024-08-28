from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel
from typing import List
from app.models.user import User

user_router = APIRouter()

# class User(BaseModel):
#     id: int
#     name: str
#     email: str

# Dummy database
fake_users_db = []

@user_router.post("/users/", response_model=User)
def create_user(user: User):
    fake_users_db.append(user)
    return user

@user_router.get("/users/", response_model=List[User])
def read_users():
    return fake_users_db

# Authorization (commented out)
# from fastapi.security import OAuth2PasswordBearer
# oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")
# def get_current_user(token: str = Depends(oauth2_scheme)):
#     # Implement token validation logic here
#     pass
