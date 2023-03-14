const express = require('express');
const {
  getCategoryName,
  getCategory,
} = require('../controllers/categoryController');
const router = express.Router();

router.get('/get-cat-name', getCategoryName);
router.get('/get-cat', getCategory);

module.exports = router;
