const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

mongoose.connect('mongodb://localhost/miso', { useNewUrlParser: true })
.then(conn => {
    console.log(`database successfully connected on ${conn.connections[0].name}`)
})
.catch(err => console.log("error connecting to database", err));

module.exports = mongoose;
