const mongoose = require('mongoose');

const nodesSchema = new mongoose.Schema({
  nodeid: String,
  city: String,
  state: String,
  lat: Number,
  long: Number
});

module.exports = mongoose.model('nodes', nodesSchema);
