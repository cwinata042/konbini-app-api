const Goal = require("../models/goal.model");

const getGoals = async (req, res) => {
  try {
    const goals = await Goal.find({});
    res.status(200).json(goals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const postGoal = async (req, res) => {
  try {
    const goal = await Goal.create(req.body);
    res.status(200).json(goal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateGoal = async (req, res) => {
  try {
    const { id } = req.params;

    const goal = await Goal.findByIdAndUpdate(id, req.body);

    if (!goal) {
      return res.status(404).json({ message: "Goal not found" });
    }

    const updatedGoal = await Goal.findById(id);

    res.status(200).json(updatedGoal);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteGoal = async (req, res) => {
  try {
    const { id } = req.params;

    const goal = await Goal.findByIdAndDelete(id);

    if (!goal) {
      return res.status(404).json({ message: "Goal not found" });
    }

    res.status(200).json({ message: "Goal deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getGoals,
  postGoal,
  updateGoal,
  deleteGoal,
};
