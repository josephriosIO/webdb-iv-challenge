const db = require("../dbConfig.js");

module.exports = {
  getDishes,
  addDish,
  getDish
};

function getDishes() {
  return db("dishes");
}

function addDish(dish) {
  return db("dishes")
    .insert(dish)
    .then(ids => {
      return getDish(ids[0]);
    });
}

function getDish(id) {
  return db("dishes")
    .join("recipes", "recipes.dish_id", "dishes.id")
    .select(
      "dishes.id as dish_id",
      "dishes.name as dish_name",
      "recipes.name as recipe_name"
    )
    .where("dishes.id", id)
    .first();
}
