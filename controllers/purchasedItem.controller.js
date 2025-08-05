const PurchasedItem = require("../models/purchasedItem.model");

const getPurchasedItems = async (req, res) => {
  try {
    const purchasedItems = await PurchasedItem.find({});
    res.status(200).json(purchasedItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const postPurchasedItem = async (req, res) => {
  try {
    const purchasedItem = await PurchasedItem.create(req.body);
    res.status(200).json(purchasedItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePurchasedItem = async (req, res) => {
  try {
    const { id } = req.params;

    const purchasedItem = await PurchasedItem.findByIdAndUpdate(id, req.body);

    if (!purchasedItem) {
      return res.status(404).json({ message: "Purchased Item not found" });
    }

    const updatedpurchasedItem = await PurchasedItem.findById(id);

    res.status(200).json(updatedpurchasedItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePurchasedItem = async (req, res) => {
  try {
    const { id } = req.params;

    const purchasedItem = await PurchasedItem.findByIdAndDelete(id);

    if (!purchasedItem) {
      return res.status(404).json({ message: "Purchased Item not found" });
    }

    res.status(200).json({ message: "Purchased Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getPurchasedItems,
  postPurchasedItem,
  updatePurchasedItem,
  deletePurchasedItem,
};
