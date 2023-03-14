const indexModel = require('../models/Hadith/IndexModel');

const {
  abuDaudIndexModel,
  bukhariIndexModel,
  muslimIndexModel,
  ibnMajahIndexModel,
  muslimHAIndexModel,
  riyadusSalihinIndexModel,
  tirmidiIndexModel,
} = require('../models/Hadith/bookIndexModel');

const abuDaudBookModel = require('../models/Hadith/abuDaudBookModel');
const bukhariBookModel = require('../models/Hadith/bukhariBookModel');
const muslimBookModel = require('../models/Hadith/muslimBookModel');
const ibnMajahBookModel = require('../models/Hadith/ibnMajahBookModel');
const muslimHABookModel = require('../models/Hadith/muslimHABookModel');
const riyadusSalihinBookModel = require('../models/Hadith/riyadusSalihinBookModel');
const tirmidiBookModel = require('../models/Hadith/tirmidiBookModel');
const bookIndexModel = require('../models/Hadith/abuDaudBookModel');

const hadithIndex = async (req, res) => {
  try {
    const index = await indexModel.find({});
    if (!index) {
      res.status(404).json({ message: 'Index not found!' });
    } else {
      res.status(200).json(index);
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const hadithIndexByBook = async (req, res) => {
  try {
    const { book } = req.params;
    const details = await indexModel.find({ book_key: book });
    const pageSize = 13;
    const page = Number(req.query.pageNumber) || 1;
    let index;
    let count;
    switch (book) {
      case 'abuDaud':
        index = await abuDaudIndexModel
          .find({})
          .limit(pageSize)
          .skip(pageSize * (page - 1));
        count = await abuDaudIndexModel.countDocuments({});
        break;
      case 'bukhari':
        index = await bukhariIndexModel
          .find({})
          .limit(pageSize)
          .skip(pageSize * (page - 1));
        count = await bukhariIndexModel.countDocuments({});
        break;
      case 'muslim':
        index = await muslimIndexModel
          .find({})
          .limit(pageSize)
          .skip(pageSize * (page - 1));
        count = await muslimIndexModel.countDocuments({});
        break;
      case 'ibnMajah':
        index = await ibnMajahIndexModel
          .find({})
          .limit(pageSize)
          .skip(pageSize * (page - 1));
        count = await ibnMajahIndexModel.countDocuments({});
        break;
      case 'muslimHA':
        index = await muslimHAIndexModel
          .find({})
          .limit(pageSize)
          .skip(pageSize * (page - 1));
        count = await muslimHAIndexModel.countDocuments({});
        break;
      case 'riyadusSalihin':
        index = await riyadusSalihinIndexModel
          .find({})
          .limit(pageSize)
          .skip(pageSize * (page - 1));
        count = await riyadusSalihinIndexModel.countDocuments({});
        break;
      case 'tirmidi':
        index = await tirmidiIndexModel
          .find({})
          .limit(pageSize)
          .skip(pageSize * (page - 1));
        count = await tirmidiIndexModel.countDocuments({});
        break;
      default:
        index = index = await bukhariIndexModel
          .find({})
          .limit(pageSize)
          .skip(pageSize * (page - 1));
        count = await bukhariIndexModel.countDocuments({});
    }
    res.status(200).json({
      index,
      page,
      pages: Math.ceil(count / pageSize),
      details: details[0],
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const hadithByBookAndChapter = async (req, res) => {
  try {
    const { book } = req.params;
    const { chapter } = req.params;
    const { start } = req.params;
    const { end } = req.params;

    let details;
    let hadiths;

    switch (book) {
      case 'abuDaud':
        details = await abuDaudIndexModel.find({ chSerial: chapter });
        hadiths = await abuDaudBookModel.find({});
        break;
      case 'bukhari':
        details = await bukhariIndexModel.find({ chSerial: chapter });
        hadiths = await bukhariBookModel.find({});
        break;
      case 'muslim':
        details = await muslimIndexModel.find({ chSerial: chapter });

        hadiths = await muslimBookModel.find({});

        break;
      case 'ibnMajah':
        details = await ibnMajahIndexModel.find({ chSerial: chapter });
        hadiths = await ibnMajahBookModel.find({});

        break;
      case 'muslimHA':
        details = await muslimHAIndexModel.find({ chSerial: chapter });
        hadiths = await muslimHABookModel.find({});
        break;
      case 'riyadusSalihin':
        details = await riyadusSalihinIndexModel.find({ chSerial: chapter });
        hadiths = await riyadusSalihinBookModel.find({});
        break;
      case 'tirmidi':
        details = await tirmidiIndexModel.find({ chSerial: chapter });
        hadiths = await tirmidiBookModel.find({});
        break;
      default:
        details = await bukhariIndexModel.find({ chSerial: chapter });
        hadiths = await bukhariBookModel.find({});
    }

    // hadiths array need to be filter out with the value of range start and end and also convert the array of object entry hadithNo to Number then compare with the range start and end
    const filtered = hadiths.filter(
      (hadith) =>
        Number(hadith.hadithNo) >= Number(start) &&
        Number(hadith.hadithNo) <= Number(end)
    );
    if (!filtered.length) {
      res.status(404).json({ message: 'No Hadith Found!' });
    } else {
      res.status(200).json({
        filtered,
        details: details[0],
      });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
const hadithByBookKey = async (req, res) => {
  try {
    const { book } = req.params;
    const page = Number(req.query.pageNumber) || 1;
    const pageSize = 1000;

    let count;
    let hadiths;

    const details = await indexModel.find({ book_key: book });

    switch (book) {
      case 'abuDaud':
        count = await abuDaudBookModel.countDocuments({});
        hadiths = await abuDaudBookModel
          .find({})
          .limit(pageSize)
          .skip(pageSize * (page - 1));

        break;
      case 'bukhari':
        count = await bukhariBookModel.countDocuments({});
        hadiths = await bukhariBookModel
          .find({})
          .limit(pageSize)
          .skip(pageSize * (page - 1));
        break;
      case 'muslim':
        count = await muslimBookModel.countDocuments({});
        hadiths = await muslimBookModel
          .find({})
          .limit(pageSize)
          .skip(pageSize * (page - 1));

        break;
      case 'ibnMajah':
        count = await ibnMajahBookModel.countDocuments({});
        hadiths = await ibnMajahBookModel
          .find({})
          .limit(pageSize)
          .skip(pageSize * (page - 1));

        break;
      case 'muslimHA':
        count = await muslimHABookModel.countDocuments({});
        hadiths = await muslimHABookModel
          .find({})
          .limit(pageSize)
          .skip(pageSize * (page - 1));
        break;
      case 'riyadusSalihin':
        count = await riyadusSalihinBookModel.countDocuments({});
        hadiths = await riyadusSalihinBookModel
          .find({})
          .limit(pageSize)
          .skip(pageSize * (page - 1));
        break;
      case 'tirmidi':
        count = await tirmidiBookModel.countDocuments({});
        hadiths = await tirmidiBookModel
          .find({})
          .limit(pageSize)
          .skip(pageSize * (page - 1));
        break;
      default:
        count = await bukhariBookModel.countDocuments({});
        hadiths = await bukhariBookModel
          .find({})
          .limit(pageSize)
          .skip(pageSize * (page - 1));
    }

    if (!hadiths.length) {
      res.status(404).json({ message: 'No Hadith Found!' });
    } else {
      res.status(200).json({
        hadiths,
        page,
        pages: Math.ceil(count / pageSize),
        details: details[0],
      });
    }

    // hadiths array need to be filter out with the value of range start and end and also convert the array of object entry hadithNo to Number then compare with the range start and end
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  hadithIndex,
  hadithIndexByBook,
  hadithByBookAndChapter,
  hadithByBookKey,
};
