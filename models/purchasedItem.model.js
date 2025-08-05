const mongoose = require("mongoose");

const PurchasedItemSchema = mongoose.Schema(
  {
    item_id: {
      type: mongoose.ObjectId,
      required: true,
    },
    date: {
      type: Date,
      required: true,
      default: Date.now,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const PurchasedItem = mongoose.model("Purchased_Item", PurchasedItemSchema);

module.exports = PurchasedItem;
