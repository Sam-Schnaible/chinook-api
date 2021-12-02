const { post } = require('../models');
const { logger } = require('../../logger.js');

module.exports = {
  addCustomer: async (req, res) => {
    try {
      let data = await post.addCustomer(req.body);
      res.status(201).send(data);
    } catch(err) {
      logger(err);
      res.status(400).send(err.message);
    }
  },

}