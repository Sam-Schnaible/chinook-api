const controller = require('./controllers');
const router = require('express').Router();
const {
  validate,
  getDeleteCustomerValidationRules,
  addUpdateCustomerValidationRules }
  = require('./validateSanitize.js');

router.get('/customers/:id', getDeleteCustomerValidationRules(), validate, controller.get.getOne);
router.get('/customers', controller.get.getInitial);
router.post('/customers', addUpdateCustomerValidationRules(), validate, controller.post.addCustomer);
router.put('/customers/:id', addUpdateCustomerValidationRules(), validate, controller.put.updateCustomer);
router.delete('/customers/:id', getDeleteCustomerValidationRules(), validate, controller.remove.removeCustomer);

module.exports = router;