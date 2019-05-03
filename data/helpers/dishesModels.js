const db = require("../dbConfig.js");
const recipeDb = require("./recipesModels");

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

const getDish = async id => {
  // TODO: Too many database request
  const dish = await getDishes()
    .where({ id })
    .first();
  const recipes = await recipeDb.getRecipes().where({ dish_id: id });
  return {
    ...dish,
    recipes
  };
};

module.exports = {
  getDishes,
  addDish,
  getDish
};
