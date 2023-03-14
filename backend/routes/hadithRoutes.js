const express = require('express');
const {
  hadithIndex,
  hadithIndexByBook,
  hadithByBookAndChapter,
  hadithByBookKey,
} = require('../controllers/hadithController');
const router = express.Router();

router.get('/index', hadithIndex);
router.get('/index/:book', hadithIndexByBook);
router.get('/get/:book/:chapter/:start/:end', hadithByBookAndChapter);
router.get('/book/:book', hadithByBookKey);

module.exports = router;
