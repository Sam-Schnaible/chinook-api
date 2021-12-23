const customerModel = require('../models/customer');
const { logger } = require('../../logger.js');

module.exports = {
  getOne: async (req, res) => {
    try {
      let data = await customerModel.getOne(req.params.id);
      res.status(200).json(data);
    } catch(err) {
      logger(err);
      res.status(400).send(err);
    }
  },

  getInitial: async (req, res) => {
    try{
      let data = await customerModel.getInitial();
      res.status(200).send(data)
    } catch(err) {
      logger(err);
      res.status(400).send(err.message);
    }
  },

  addCustomer: async (req, res) => {
    try {
      let data = await customerModel.addCustomer(req.body);
      res.status(201).send(data);
    } catch(err) {
      logger(err);
      res.status(400).send(err.message);
    }
  },

  updateCustomer: async (req, res) => {
    try {
      let data = await customerModel.updateCustomer(req.params.id, req.body);
      res.status(200).send(data);
    } catch(err) {
      logger(err);
      res.status(400).send(err.message);
    }
  },

  removeCustomer: async (req, res) => {
    try {
      let data = await customerModel.removeCustomer(req.params.id);
      res.status(200).send(data);
    } catch(err) {
      logger(err);
      res.status(400).send(err.message);
    }
  },
}