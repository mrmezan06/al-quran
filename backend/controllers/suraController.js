const Sura = require('../models/sura');
const SuraAE = require('../models/suraAE');

/* Sura List Controller */
const getAllSuraIndex = async (req, res) => {
  try {
    const pageSize = 13;
    const page = Number(req.query.pageNumber) || 1;
    const suraAE = await SuraAE.find({})
      .sort({ number: 1 })
      .limit(pageSize)
      .skip(pageSize * (page - 1));

    const count = await SuraAE.countDocuments({});

    if (!suraAE) {
      res.status(404).json({ error: 'No Sura List Found!!' });
    } else {
      res.status(200).json({
        suraList: suraAE,
        page,
        pages: Math.ceil(count / pageSize),
      });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getSuraIndexById = async (req, res) => {
  try {
    const sura = await Sura.findById(req.params.id);
    if (!sura) {
      res.status(404).json({ error: 'No Sura Found!' });
    } else {
      res.status(200).json(sura);
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

/* End of Sura List Controller */

module.exports = { getAllSuraIndex, getSuraIndexById };
