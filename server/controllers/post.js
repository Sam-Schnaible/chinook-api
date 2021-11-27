const { post } = require('../models');

module.exports = {
  addCustomer: async (req, res) => {
    try {
      let data = await post.addCustomer(req.body);
      res.status(201).send(data);
    } catch(err) {
      console.log(err);
      res.status(400).send(err);
    }
  },

}