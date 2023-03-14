const mongoose = require('mongoose');

const SuraAESchema = new mongoose.Schema(
  {
    number: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    englishName: {
      type: String,
      required: true,
    },
    englishNameTranslation: {
      type: String,
      required: true,
    },
    numberOfAyahs: {
      type: Number,
      required: true,
    },
    revelationType: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('SuraNameAE', SuraAESchema);
