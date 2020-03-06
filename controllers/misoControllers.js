const express = require('express');
const Gif = require('../db/schema');

const router = express.Router();
//get map info
//GET: api/lmp/5min - fetches 5 minute price data
router.get('/', (req, res) => {
  Miso.find({})
    .then(misos => res.json(misos))
    .catch(console.error);
});
//GET: api/users/:id - fetches user 
router.get('/:id', (req, res) => {
  Miso.findById(req.params.id).then(miso => {
    res.json(miso);
  });
});
//POST: api/users/ - creates user

router.post('/', (req, res) => {
  const newUser = req.body;
  Miso.create(newUser).then(user => {
    res.json(user);
  });
});
//PUT: api/users/:id - updates user
router.put('/users/:id', (req, res) => {
  Miso.findOneAndUpdate({ _id: req.params.id }, req.body).then(gif =>
    Miso.find({}).then(gifs => {
      res.json(misos);
    })
  );
});
//DELETE: api/users/:id - deletes user
router.delete('/users/:id', (req, res) => {
  Gif.findOneAndRemove({ _id: req.params.id }, req.body).then(gif =>
    Gif.find({}).then(gifs => {
      res.json(gifs);
    })
  );
});

module.exports = router;
