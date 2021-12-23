const customerController = require('./controllers/customer');
const router = require('express').Router();
const {
  validate,
  getDeleteCustomerValidationRules,
  addUpdateCustomerValidationRules }
  = require('./validateSanitize.js');

router.get('/customers/:id', getDeleteCustomerValidationRules(), validate, customerController.getOne);
router.get('/customers', customerController.getInitial);
router.post('/customers', addUpdateCustomerValidationRules(), validate, customerController.addCustomer);
router.put('/customers/:id', addUpdateCustomerValidationRules(), validate, customerController.updateCustomer);
router.delete('/customers/:id', getDeleteCustomerValidationRules(), validate, customerController.removeCustomer);

module.exports = router;