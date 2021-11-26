const { post } = require('../models');

module.exports = {
  addCustomer: async (req, res) => {
    try {
      await post.addCustomer(req.body);
      res.status(201).send('New customer added!');
    } catch(err) {
      console.log(err);
      res.status(400).send(err);
    }
  }
}