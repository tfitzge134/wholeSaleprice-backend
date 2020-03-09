const express = require('express');
const {
  createUser,
  loginUser,
  updateUser,
  deleteUser
} = require('../controllers/userController');

const app = express();

app.post('/user', createUser);

app.get('/user/:email', loginUser);

app.put('/user/:_id', updateUser);

app.delete('/user/:email', deleteUser);

module.exports = app;
