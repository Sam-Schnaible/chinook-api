const { get } = require('../models');

module.exports = {
  getOne: async (req, res) => {
    try {
      let data = await get.getOne(req.params.id);
      res.status(200).json(data);
    } catch(err) {
      console.log(err);
      res.status(400).send(err);
    }
  },

}