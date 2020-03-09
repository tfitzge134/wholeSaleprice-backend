const express = require("express");
const {getAllMisoPrices} = require("../controllers/misoPriceControllers")

const app = express();

app.get("/miso", getAllMisoPrices);

module.exports = app;