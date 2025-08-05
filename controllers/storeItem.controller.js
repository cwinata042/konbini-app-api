const StoreItem = require("../models/storeItem.model");

const getStoreItems = async (req, res) => {
  try {
    const storeItems = await StoreItem.find({});
    res.status(200).json(storeItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const postStoreItem = async (req, res) => {
  try {
    const storeItem = await StoreItem.create(req.body);
    res.status(200).json(storeItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateStoreItem = async (req, res) => {
  try {
    const { id } = req.params;

    const storeItem = await StoreItem.findByIdAndUpdate(id, req.body);

    if (!storeItem) {
      return res.status(404).json({ message: "Store Item not found" });
    }

    const updatedStoreItem = await StoreItem.findById(id);

    res.status(200).json(updatedStoreItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteStoreItem = async (req, res) => {
  try {
    const { id } = req.params;

    const storeItem = await StoreItem.findByIdAndDelete(id);

    if (!storeItem) {
      return res.status(404).json({ message: "Store Item not found" });
    }

    res.status(200).json({ message: "Store Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getStoreItems,
  postStoreItem,
  updateStoreItem,
  deleteStoreItem,
};
