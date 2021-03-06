const User = require('../db/models/UserSchema');

module.exports.getAllUser = (req, res) => {
  User.find((err, data) => {
    if (err) res.send(err);
    res.send(data);
  });
};

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
      res.send({error: 'error occured', err});
    }
    if (data.length > 0) {
      res.send({ msg: 'logged in successfully', data: data[0] });
    } else {
      res.send({ error: 'account does not exist' });
    }
  });
};

module.exports.getSingleUser = (req, res) => {
  const { _id } = req.params;
  User.findById({ _id }, (err, data) => {
    if (err) res.send(err);
    res.send(data);
  });
};

module.exports.updateUser = (req, res) => {
  const { _id } = req.params;
  const updatedUser = req.body;
  User.findByIdAndUpdate(_id, updatedUser, { upsert: true }, (err, data) => {
    if (err) res.send(err);
    res.send({ msg: 'updated successfully' });
  });
};

module.exports.deleteUser = (req, res) => {
  const { _id } = req.params;
  User.findOneAndDelete({ _id }, (err, data) => {
    if (err) res.send(err);
    res.send({ success: 'deleted successfully' });
  });
};
