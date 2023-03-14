const mongoose = require('mongoose');

const bookIndexSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
    },
    nameEnglish: {
      type: String,
    },
    nameBengali: {
      type: String,
    },
    lastUpdate: {
      type: String,
    },
    isActive: {
      type: String,
    },
    chSerial: {
      type: String,
    },
    bookId: {
      type: String,
    },
    hadith_number: {
      type: String,
    },
    range_start: {
      type: String,
    },
    range_end: {
      type: String,
    },
    bookInitial: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const abuDaudIndexModel = mongoose.model('abuDaudIndex', bookIndexSchema);
const bukhariIndexModel = mongoose.model('bukhariIndex', bookIndexSchema);
const muslimIndexModel = mongoose.model('muslimIndex', bookIndexSchema);
const ibnMajahIndexModel = mongoose.model('ibnMajahIndex', bookIndexSchema);
const muslimHAIndexModel = mongoose.model('muslimHAIndex', bookIndexSchema);
const riyadusSalihinIndexModel = mongoose.model(
  'riyadusSalihinIndex',
  bookIndexSchema
);
const tirmidiIndexModel = mongoose.model('tirmidiIndex', bookIndexSchema);

module.exports = {
  abuDaudIndexModel,
  bukhariIndexModel,
  muslimIndexModel,
  ibnMajahIndexModel,
  muslimHAIndexModel,
  riyadusSalihinIndexModel,
  tirmidiIndexModel,
};
