const mongoose = require('mongoose');

const indexSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    nameEnglish: {
      type: String,
      required: true,
    },
    nameBengali: {
      type: String,
      required: true,
    },
    lastUpdate: {
      type: String,
      required: true,
    },
    isActive: {
      type: String,
      required: true,
    },
    priority: {
      type: String,
      required: true,
    },
    publisherId: {
      type: String,
      required: true,
    },
    section_number: {
      type: String,
      required: true,
    },
    hadith_number: {
      type: String,
      required: true,
    },
    book_key: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const indexModel = mongoose.model('hadithIndex', indexSchema);

module.exports = indexModel;
