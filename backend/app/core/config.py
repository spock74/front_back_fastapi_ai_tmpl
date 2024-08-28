from pydantic import BaseSettings

class Settings(BaseSettings):
    app_name: str = "FastAPI Application"
    database_url: str = "postgresql://user:password@localhost/dbname"

settings = Settings()
