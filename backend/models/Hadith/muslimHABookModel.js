const mongoose = require('mongoose');

const bookIndexSchema = new mongoose.Schema(
  {
    hadithEnglish: {
      type: String,
    },
    hadithBengali: {
      type: String,
    },
    hadithArabic: {
      type: String,
    },
    checkStatus: {
      type: String,
    },
    hadithNo: {
      type: String,
    },
    id: {
      type: String,
      required: true,
    },
    thesequence: {
      type: String,
    },
    isActive: {
      type: String,
    },
    chapterId: {
      type: String,
    },
    bookId: {
      type: String,
    },
    publisherId: {
      type: String,
    },
    sectionId: {
      type: String,
    },
    statusId: {
      type: String,
    },
    topicName: {
      type: String,
    },
    rabiNameBn: {
      type: String,
    },
    rabiNameEn: {
      type: String,
    },
  },
  { timestamps: true }
);

const bookIndexModel = mongoose.model('MuslimHABook', bookIndexSchema);

module.exports = bookIndexModel;
