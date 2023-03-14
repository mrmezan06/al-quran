const mongoose = require('mongoose');

const ManzilSchema = new mongoose.Schema(
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

module.exports = mongoose.model('Manzil', ManzilSchema);
