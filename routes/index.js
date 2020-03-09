const express = require('express');
const userRoute = require('./userRoute');
const misoPriceRoute = require('./misoPriceRoute');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.use('/', userRoute);
app.use('/', misoPriceRoute);

module.exports = app;
