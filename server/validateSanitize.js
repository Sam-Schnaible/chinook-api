const { check, body, validationResult } = require('express-validator');

const getCustomerValidationRules = () => {
  console.log('THIS IS INVOKED')
  return [
    check('id').matches('[0-9]').withMessage('ID must be an integer').trim().escape()
  ]
}

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

    return res.status(422).json({errors: extractedErrors})
  } else {
    next();
  }
}


module.exports = {
  getCustomerValidationRules,
  validate
}