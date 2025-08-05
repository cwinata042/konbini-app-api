const mongoose = require("mongoose");

const GoalSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    deadline: {
      type: Date,
      required: false,
    },
    points: {
      type: Number,
      required: true,
    },
    items_unlocked: {
      type: [mongoose.ObjectId],
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Goal = mongoose.model("Goal", GoalSchema);

module.exports = Goal;
