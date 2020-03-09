const User = require('../db/models/UserSchema');

module.exports.createUser = (req, res) => {
  const userData = req.body;
  User.create(userData, (err, data) => {
    if (err) res.send({ error: 'user already exists', err });
    res.send({ msg: 'account created successfully', data });
  });
};

module.exports.loginUser = (req, res) => {
  const { email } = req.params;
  User.find({ email }, (err, data) => {
    if (err) {
      res.send(err);
    }
    if (data.length > 0) {
      res.send({ msg: 'logged in successfully', data });
    } else {
      res.send({ error: 'account does not exist' });
    }
  });
};

module.exports.updateUser = (req, res) => {
  const { _id } = req.params;
  const updatedUser = req.body;
  User.findOneAndUpdate(_id, updatedUser, { upsert: true }, (err, data) => {
    if (err) res.send(err);
    res.send({ msg: 'updated successfully', data });
  });
};

module.exports.deleteUser = (req, res) => {
  const { email } = req.params;
  User.findOneAndDelete({ email }, (err, data) => {
    if (err) res.send(err);
    res.send({ success: 'deleted successfully' });
  });
};
