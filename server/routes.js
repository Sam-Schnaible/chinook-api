const controller = require('./controllers');
const router = require('express').Router();

router.get('/customers/:id', controller.get.getOne);

module.exports = router;