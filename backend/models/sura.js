const mongoose = require('mongoose');

const SuraSchema = new mongoose.Schema(
  {
    sura_name: {
      type: String,
      required: true,
    },
    sura_no: {
      type: String,
      required: true,
    },
    total_ayat: {
      type: String,
      required: true,
    },
    para: {
      type: String,
      required: true,
    },
    eng_name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Sura', SuraSchema);
