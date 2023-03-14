const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
  {
    cat: {
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
  },
  { timestamps: true }
);

module.exports = mongoose.model('Category', categorySchema);
