const db = require("../dbConfig.js");

module.exports = {
  getDishes
};

function getDishes() {
  return db("dishes");
}
