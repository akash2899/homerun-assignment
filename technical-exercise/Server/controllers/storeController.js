const stores = require('../models/storeModel');

const getAllStores = (req, res) => {
  res.json(stores);
};

module.exports = { getAllStores };
