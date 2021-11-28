const controller = require('./controllers');
const router = require('express').Router();

router.get('/customers/:id', controller.get.getOne);
router.post('/customers', controller.post.addCustomer);
router.put('/customers/:id', controller.put.updateCustomer);
router.delete('/customers/:id', controller.remove.removeCustomer);

module.exports = router;