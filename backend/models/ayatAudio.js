const mongoose = require('mongoose');

const AyatAudioSchema = new mongoose.Schema(
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
    revelationType: {
      type: String,
      required: true,
    },
    ayahs: [],
  },
  { timestamps: true }
);

module.exports = mongoose.model('AyatAudio', AyatAudioSchema);

// Sura fatiha Ayat 2-7  and 1 is Bismillahir Rahmanir Rahim in ayatAudioModel Data
// Others are in ayatAudioModel Data 1-totalAyat
