exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        { name: "Fish Tacos", dish_id: 1 },
        { name: "Manwitch", dish_id: 2 },
        { name: "Mike's Bison burger", dish_id: 3 }
      ]);
    });
};
