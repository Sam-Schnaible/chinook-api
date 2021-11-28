const { remove } = require('../models');

module.exports = {
  removeCustomer: async (req, res) => {
    try {
      let data = await remove.removeCustomer(req.params.id);
      res.status(200).send(data);
    } catch(err) {
      console.log(err);
      res.status(400).send(err.message);
    }
  },

}