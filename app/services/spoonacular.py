import requests
import os
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("SPOONACULAR_API_KEY")

def search_recipes(diet, includeIngredients, type, intolerances, instructionsRequired):
    url = "https://api.spoonacular.com/recipes/complexSearch"
    params = {
        "apiKey": API_KEY,
        "diet": diet,
        "includeIngredients": includeIngredients,
        "type": type,
        "intolerances": intolerances,
        "instructionsRequired": instructionsRequired,
        "addRecipeInformation": True  # To include detailed information directly
    }
    response = requests.get(url, params=params)
    return response.json()

def get_analyzed_recipe_instructions(id, stepBreakdown=True):
    url = f"https://api.spoonacular.com/recipes/{id}/analyzedInstructions"
    params = {
        "apiKey": API_KEY,
        "stepBreakdown": stepBreakdown
    }
    response = requests.get(url, params=params)
    return response.json()
