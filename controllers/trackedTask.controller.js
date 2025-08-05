const TrackedTask = require("../models/trackedTask.model");

const getTrackedTasks = async (req, res) => {
  try {
    const trackedTasks = await TrackedTask.find({});
    res.status(200).json(trackedTasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const postTrackedTask = async (req, res) => {
  try {
    const trackedTask = await TrackedTask.create(req.body);
    res.status(200).json(trackedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateTrackedTask = async (req, res) => {
  try {
    const { id } = req.params;

    const trackedTask = await TrackedTask.findByIdAndUpdate(id, req.body);

    if (!trackedTask) {
      return res.status(404).json({ message: "Tracked Task not found" });
    }

    const updatedTrackedTask = await TrackedTask.findById(id);

    res.status(200).json(updatedTrackedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTrackedTask = async (req, res) => {
  try {
    const { id } = req.params;

    const trackedTask = await TrackedTask.findByIdAndDelete(id);

    if (!trackedTask) {
      return res.status(404).json({ message: "Tracked Task not found" });
    }

    res.status(200).json({ message: "Tracked Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getTrackedTasks,
  postTrackedTask,
  updateTrackedTask,
  deleteTrackedTask,
};
