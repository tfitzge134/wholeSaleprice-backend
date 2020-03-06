const mongoose = require('mongoose');

const misoPriceSchema = new mongoose.Schema({
  name: String,
  region: String,
  LMP: Number,
  MCC: Number,
  MLC: Number
});

module.exports = mongoose.model('misoPrice', misoPriceSchema);