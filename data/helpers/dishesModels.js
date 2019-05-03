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
    .where({ id })
    .first();
}
