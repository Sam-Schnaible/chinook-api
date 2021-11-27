const { put } = require('../models');

module.exports = {
  updateCustomer: async (req, res) => {
    try {
      let data = await put.updateCustomer(req.params.id, req.body);
      res.status(201).send(data);
    } catch(err) {
      console.log(err);
      res.status(400).send(err);
    }
  },

}