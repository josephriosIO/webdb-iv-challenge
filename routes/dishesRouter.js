const router = require("express").Router();

const dishDb = require("../data/helpers/dishesModels");

router.get("/", async (req, res) => {
  try {
    const getDishes = await dishDb.getDishes();
    res.status(200).json(getDishes);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const addDish = await dishDb.addDish(req.body);
    res.status(201).json(addDish);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
