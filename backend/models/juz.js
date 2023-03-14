const mongoose = require('mongoose');

const JuzSchema = new mongoose.Schema(
  {
    surah: {
      type: Number,
      required: true,
    },
    ayah: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Juz', JuzSchema);
