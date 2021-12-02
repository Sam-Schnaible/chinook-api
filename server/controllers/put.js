const { put } = require('../models');
const { logger } = require('../../logger.js');

module.exports = {
  updateCustomer: async (req, res) => {
    try {
      let data = await put.updateCustomer(req.params.id, req.body);
      res.status(200).send(data);
    } catch(err) {
      logger(err);
      res.status(400).send(err.message);
    }
  },

}