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

module.exports = router;
