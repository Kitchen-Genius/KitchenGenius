# main.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
# from app.routes.ingredients_routes import router as ingredients_router  # Adjust import path as necessary
from app.services.spoonacular import search_recipes
# from app.database.db import client
from dotenv import load_dotenv
import os



load_dotenv()
SPOONACULAR_API_KEY = os.getenv("SPOONACULAR_API_KEY")

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# app.include_router(ingredients_router)

# @app.on_event("startup")
# async def startup_event():
    # Example: Connect to the database (if needed)
#     pass

# @app.on_event("shutdown")
# async def shutdown_event():
    # Example: Close database connection (if needed)
#     await client.close()

@app.get("/recipes/")
async def get_recipes(
    diet: str = None,
    includeIngredients: str = None,
    type: str = None,
    intolerances: str = None,
    instructionsRequired: bool = True
):
    try:
        recipes = search_recipes(diet=diet, includeIngredients=includeIngredients, type=type, intolerances=intolerances, instructionsRequired=instructionsRequired)
        return recipes
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
