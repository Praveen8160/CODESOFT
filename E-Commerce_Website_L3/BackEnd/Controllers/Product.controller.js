const Categories = require("../models/Categories.model.js");
const getAllProductCategory = async (req, res) => {
  try {
    const allCategories = await Categories.find({});
    return res.json(allCategories);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  } 
};

module.exports = {
  getAllProductCategory,
};
