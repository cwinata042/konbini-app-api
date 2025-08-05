const mongoose = require("mongoose");

const TrackedTaskSchema = mongoose.Schema(
  {
    task_id: {
      type: mongoose.ObjectId,
      required: true,
    },
    date: {
      type: Date,
      required: true,
      default: Date.now,
    },
    count: {
      type: Number,
      required: true,
    },
    earned_points: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const TrackedTask = mongoose.model("Tracked_Task", TrackedTaskSchema);

module.exports = TrackedTask;
