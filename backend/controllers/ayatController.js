const AyatBN = require('../models/ayatBN');
const AyatEN = require('../models/ayatEN');
const AyatAR = require('../models/ayatAR');
const Sura = require('../models/sura');
const AyatAudio = require('../models/ayatAudio');
const audioFull = require('../models/audioFull');

const getSuraByNo = async (req, res) => {
  const sura = req.params.sura;
  const pageSize = 15;
  const page = Number(req.query.pageNumber) || 1;
  var startAR = '';
  var startBN = '';
  var startEN = '';
  var startAudio = '';
  try {
    startBN = await AyatBN.find({ sura: '1', aya: '1' });
    startEN = await AyatEN.find({ sura: '1', aya: '1' });
    startAR = await AyatAR.find({ sura: '1', VerseIDAr: '1' });
    const firstSuraAudio = await AyatAudio.find({ number: sura });
    startAudio = firstSuraAudio[0].ayahs[0];

    const fullAudio = await audioFull.find({ sura_no: sura });

    const details = await Sura.find({ sura_no: sura });

    const count = await AyatBN.countDocuments({ sura });

    const ayatBN = await AyatBN.find({ sura })
      .limit(pageSize)
      .skip(pageSize * (page - 1));
    const ayatEN = await AyatEN.find({ sura })
      .limit(pageSize)
      .skip(pageSize * (page - 1));
    const ayatAR = await AyatAR.find({ sura })
      .limit(pageSize)
      .skip(pageSize * (page - 1));
    // paginate ayatAudio.ayahs array
    const ayatAudio = await AyatAudio.find({ number: sura });
    const ayahsArray = ayatAudio[0].ayahs;
    const ayahs = ayahsArray.slice(pageSize * (page - 1), pageSize * page);

    if (ayatBN.length == 0 || ayatEN.length == 0 || ayatAR.length == 0) {
      res
        .status(404)
        .json({ error: 'Invalid sura number! Options available [1-114]' });
    } else {
      if (sura === '1') {
        // if it is Sura Fatiha then remove first aya and send start ayat
        res.status(200).json({
          AR: { start: startAR[0], aya: ayatAR.slice(1) },
          BN: { start: startBN[0], aya: ayatBN.slice(1) },
          EN: { start: startEN[0], aya: ayatEN.slice(1) },
          audio: { start: startAudio, aya: ayahs.slice(1) },
          page,
          pages: Math.ceil(count / pageSize),
          details: details[0],
          fullAudio: fullAudio[0],
        });
      } else {
        // if it is not Sura Fatiha then send start ayat
        // send details first index
        res.status(200).json({
          AR: { start: startAR[0], aya: ayatAR },
          BN: { start: startBN[0], aya: ayatBN },
          EN: { start: startEN[0], aya: ayatEN },
          audio: { start: startAudio, aya: ayahs },
          page,
          pages: Math.ceil(count / pageSize),
          details: details[0],
          fullAudio: fullAudio[0],
        });
      }
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { getSuraByNo };
