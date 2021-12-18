const { check, body, validationResult } = require('express-validator');

const getCustomerValidationRules = () => {
  return [
    check('id').matches('[0-9]').withMessage('ID must be an integer').trim().escape()
  ]
}

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  }
}

module.exports = {
  getCustomerValidationRules,
  validate
}