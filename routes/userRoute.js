const express = require('express');
const {
  getAllUser,
  getSingleUser,
  createUser,
  loginUser,
  updateUser,
  deleteUser
} = require('../controllers/userController');

const app = express();

app.get('/user', getAllUser);

app.get('/user/single/:_id', getSingleUser);

app.post('/user', createUser);

app.get('/user/:email', loginUser);

app.put('/user/:_id', updateUser);

app.delete('/user/:_id', deleteUser);

module.exports = app;
