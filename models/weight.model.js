const mongoose = require("mongoose");

const WeightSchema = mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
      default: Date.now,
    },
    weight: {
      type: mongoose.Decimal128,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Weight = mongoose.model("Weight", WeightSchema);

module.exports = Weight;
