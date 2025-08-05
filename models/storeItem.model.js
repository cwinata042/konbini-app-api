const mongoose = require("mongoose");

const StoreItemSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["Merch", "Snack", "Hobby", "Misc.", "Clothes", "Game"],
      required: true,
      default: "Misc.",
    },
    irl_cost: {
      type: Number,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const StoreItem = mongoose.model("Store_Item", StoreItemSchema);

module.exports = StoreItem;
