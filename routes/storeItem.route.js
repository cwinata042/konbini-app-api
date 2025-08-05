const express = require("express");
const router = express.Router();
const {
  getStoreItems,
  postStoreItem,
  updateStoreItem,
  deleteStoreItem,
} = require("../controllers/storeItem.controller");

router.get("/", getStoreItems);
router.post("/", postStoreItem);
router.put("/:id", updateStoreItem);
router.delete("/:id", deleteStoreItem);

module.exports = router;
