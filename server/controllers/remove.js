const { remove } = require('../models');
const { logger } = require('../../logger.js');

module.exports = {
  removeCustomer: async (req, res) => {
    try {
      let data = await remove.removeCustomer(req.params.id);
      res.status(200).send('Customer Successfully Deleted');
    } catch(err) {
      logger(err);
      res.status(400).send(err.message);
    }
  },

}