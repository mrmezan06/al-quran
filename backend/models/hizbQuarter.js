const mongoose = require('mongoose');

const HizbQuarterSchema = new mongoose.Schema(
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

module.exports = mongoose.model('HizbQuarter', HizbQuarterSchema);
