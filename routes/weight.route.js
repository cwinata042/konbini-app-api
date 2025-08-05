const express = require("express");
const router = express.Router();
const {
  getWeights,
  postWeight,
  updateWeight,
  deleteWeight,
} = require("../controllers/weight.controller");

router.get("/", getWeights);
router.post("/", postWeight);
router.put("/:id", updateWeight);
router.delete("/:id", deleteWeight);

module.exports = router;
