const stores = require('../models/storeModel');

const getAllStores = (req, res) => {
  res.json(stores);
};
console.log ("akash" , stores);
module.exports = { getAllStores };
