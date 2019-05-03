const express = require("express");
const recipesRoute = express.Router();
const databaseAccess = require("../data/helpers/recipesModels");

recipesRoute.post("/", async (request, response) => {
  const newRecipe = request.body;
  try {
    const newRecipeId = await databaseAccess.addRecipe(newRecipe);
    response.status(200).json(newRecipeId);
  } catch (error) {
    response.status(500).json({
      errorMessage: "Could not add Recipe to database."
    });
  }
});

recipesRoute.get("/", async (request, response) => {
  try {
    const recipes = await databaseAccess.getRecipes();
    response.status(200).json(recipes);
  } catch (error) {
    response.status(500).json({
      errorMessage: "Could not retrieve Recipes from database."
    });
  }
});

recipesRoute.get("/:recipeId", async (request, response) => {
  const recipeId = request.params.recipeId;
  try {
    const recipe = await databaseAccess.getRecipe(recipeId);
    response.status(200).json(recipe);
  } catch (error) {
    response.status(500).json({
      errorMessage: "Could not retrieve Recipe from database."
    });
  }
});

recipesRoute.get("/:recipeId/shoppinglist", async (request, response) => {
  const recipeId = request.params.recipeId;
  try {
    const shoppingList = await databaseAccess.getShoppingList(recipeId);
    response.status(200).json(shoppingList);
  } catch (error) {
    response.status(500).json({
      errorMessage: "Could not find Recipe's Shopping List in database."
    });
  }
});

module.exports = recipesRoute;
