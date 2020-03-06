const express = require("express");
const routes = require("./routes/");
require("./db/models/connection");

const PORT = process.env.PORT || 3000;

const app = express();

app.use("/api/user", routes)

app.listen(PORT, () => console.log(`app is running on port ${PORT}`));