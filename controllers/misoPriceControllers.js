const misoPrice = require('../db/models/MisoPriceSchema');
const nodesModel = require('../db/models/nodesSchema');

module.exports.getAllMisoPrices = async (req, res) => {
  const prices = await misoPrice.find({});
  const nodes = await nodesModel.find({});

  res.send({prices, nodes});
};
