const { get } = require('../models');
const { logger } = require('../../logger.js');

module.exports = {
  getOne: async (req, res) => {
    try {
      let data = await get.getOne(req.params.id);
      res.status(200).json(data);
    } catch(err) {
<<<<<<< HEAD
      console.log(err);
      res.status(400).send(err.message);
=======
      logger(err);
      res.status(400).send(err);
>>>>>>> ea4482613043adf6f736cd16f383317b640ed017
    }
  },

  getInitial: async (req, res) => {
    try{
      let data = await get.getInitial();
      res.status(200).send(data)
    } catch(err) {
      logger(err);
      res.status(400).send(err.message);
    }
  },

}