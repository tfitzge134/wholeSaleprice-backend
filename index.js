const express = require('express');
const routes = require('./routes');
const cors = require('cors');
require('./db/models/connection');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.use('/api', routes);

app.listen(PORT, () => console.log(`app is running on port ${PORT}`));
