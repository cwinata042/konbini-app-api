const express = require("express");
const router = express.Router();
const {
  getPurchasedItems,
  postPurchasedItem,
  updatePurchasedItem,
  deletePurchasedItem,
} = require("../controllers/purchasedItem.controller");

router.get("/", getPurchasedItems);
router.post("/", postPurchasedItem);
router.put("/:id", updatePurchasedItem);
router.delete("/:id", deletePurchasedItem);

module.exports = router;
