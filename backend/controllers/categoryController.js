/* Category Name Controller */
const CategoryName = require('../models/category_name');

const getCategoryName = async (req, res) => {
  try {
    const categoryNames = await CategoryName.find({});
    if (!categoryNames) {
      res.status(404).json({ error: 'Category Names not found!' });
    } else {
      res.status(200).json(categoryNames);
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/* Category Name Controller End */

/* Category Controller */
const Category = require('../models/category');
const getCategory = async (req, res) => {
  try {
    const categories = await Category.find({});
    if (!categories) {
      res.status(404).json({ error: 'Categories not found!' });
    } else {
      res.status(200).json(categories);
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/* Category Controller End */

module.exports = { getCategoryName, getCategory };
