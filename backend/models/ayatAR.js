const mongoose = require('mongoose');

const AyatSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    sura: {
      type: String,
      required: true,
    },
    VerseIDAr: {
      type: String,
      required: true,
    },
    ayat: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('AyatAR', AyatSchema);
