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
    aya: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('AyatBN', AyatSchema);
