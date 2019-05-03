const db = require("../dbConfig.js");

const getRecipe = async id => {
  const recipe = await db("dishes")
    .join("recipes", "dishes.id", "recipes.dish_id")
    .select("dishes.name as dish_name", "recipes.name as recipe_name")
    .where("recipes.id", id)
    .first();

  const ingredients = await db("recipes_ingredients")
    .join("ingredients", "recipes_ingredients.ingredient_id", "ingredients.id")
    .select(
      "ingredients.name as ingredient_name",
      "recipes_ingredients.quantity"
    )
    .where("recipes_ingredients.recipe_id", id);

  return {
    ...recipe,
    ingredients
  };
};

const getRecipes = () => {
  return db("dishes")
    .join("recipes", "dishes.id", "recipes.dish_id")
    .select("*", "dishes.name as dish_name");
};

const addRecipe = newRecipe => {
  return db("recipes").insert(newRecipe);
};

module.exports = {
  getRecipe,
  getRecipes,
  addRecipe
};
