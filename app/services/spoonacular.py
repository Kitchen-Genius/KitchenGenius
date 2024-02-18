import httpx
from typing import Any, Dict
import os

# Assuming you've loaded SPOONACULAR_API_KEY as shown earlier
SPOONACULAR_API_KEY = os.getenv("SPOONACULAR_API_KEY")
BASE_URL = "https://api.spoonacular.com"

async def fetch_recipe(ingredients: str) -> Dict[str, Any]:
    """
    Fetch a recipe based on ingredients.
    :param ingredients: A list of ingredients as a string.
    :return: JSON response from the Spoonacular API.
    """
    async with httpx.AsyncClient() as client:
        params = {
            "apiKey": SPOONACULAR_API_KEY,
            "ingredients": ingredients,
            "number": 1  # Number of recipes to fetch
        }
        response = await client.get(f"{BASE_URL}/recipes/findByIngredients", params=params)
        return response.json()