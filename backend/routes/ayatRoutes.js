const express = require('express');
const { getSuraByNo } = require('../controllers/ayatController');
const router = express.Router();

router.get('/get/:sura', getSuraByNo);

module.exports = router;
