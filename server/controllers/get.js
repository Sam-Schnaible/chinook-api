const { get } = require('../models');
const { logger } = require('../../logger.js');

module.exports = {
  getOne: async (req, res) => {
    try {
      let data = await get.getOne(req.params.id);
      res.status(200).json(data);
    } catch(err) {
      logger(err);
      res.status(400).send(err);
    }
  },

}