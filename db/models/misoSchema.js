const mongoose = require("mongoose")


const misoSchema = new mongoose.Schema({
  nodeid: String,
  city: String,
  state: String,
  lat: Number,
  long: Number
});

module.exports = mongoose.model("Miso", misoSchema)
