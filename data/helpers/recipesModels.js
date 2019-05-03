const db = require("../dbConfig.js");

const getRecipe = async id => {
  const recipe = await db("dishes")
    .join("recipes", "dishes.id", "recipes.dish_id")
    .select("dishes.name as dish_name", "recipes.name as recipe_name")
    .where("recipes.id", id)
    .first();

  const ingredients = await db("recipe_ingredents")
    .join("ingredents", "recipe_ingredents.ingredent_id", "ingredents.id")
    .select("ingredents.name as ingredent_name", "recipe_ingredents.quantity")
    .where("recipe_ingredents.recipe_id", id);

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
