from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base # type: ignore

SQLALCHEMY_DATABASE_URL = "sqlite:///./todosapp.db"
##'postgresql://postgres:admin@localhost/TodoApplicationDatabase'
## 'sqlite:///./todosapp.db'
engine =create_engine(SQLALCHEMY_DATABASE_URL, connect_args={'check_same_thread': False})

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()