const express = require('express');
const {
  getSuraIndexById,
  getAllSuraIndex,
} = require('../controllers/suraController');
const router = express.Router();

router.get('/index', getAllSuraIndex);
router.get('/:id', getSuraIndexById);

module.exports = router;
