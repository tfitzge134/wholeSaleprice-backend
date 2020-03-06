const express = require("express");
const userRoute = require("./userRoute");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json())

app.use("/", userRoute);

module.exports = app;
