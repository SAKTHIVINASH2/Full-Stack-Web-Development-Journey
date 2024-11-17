const { AllRestroModel } = require("../models/Restaurants");

const allRestro = async (req, res) => {
  try {
    const data = await AllRestroModel();
    res.status(200).json(data);
  } catch (err) {
    console.error("Error in allRestro controller:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { allRestro };