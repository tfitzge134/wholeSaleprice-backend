const express = require('express');
const {
  createUser,
  loginUser,
  updateUser,
  deleteUser
} = require('../controllers/userController');

const app = express();

app.post('/', createUser);

app.get('/:email', loginUser);

app.put('/:_id', updateUser);

app.delete('/:email', deleteUser);

module.exports = app;
