const Weight = require("../models/weight.model");

const getWeights = async (req, res) => {
  try {
    const weights = await Weight.find({});
    res.status(200).json(weights);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const postWeight = async (req, res) => {
  try {
    const weight = await Weight.create(req.body);
    res.status(200).json(weight);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateWeight = async (req, res) => {
  try {
    const { id } = req.params;

    const weight = await Weight.findByIdAndUpdate(id, req.body);

    if (!weight) {
      return res.status(404).json({ message: "Weight not found" });
    }

    const updatedWeight = await Weight.findById(id);

    res.status(200).json(updatedWeight);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteWeight = async (req, res) => {
  try {
    const { id } = req.params;

    const weight = await Weight.findByIdAndDelete(id);

    if (!weight) {
      return res.status(404).json({ message: "Weight not found" });
    }

    res.status(200).json({ message: "Weight deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getWeights,
  postWeight,
  updateWeight,
  deleteWeight,
};
