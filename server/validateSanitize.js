const { check, body, validationResult } = require('express-validator');

const getDeleteCustomerValidationRules = () => {
  return [
    check('id').matches('[0-9]').withMessage('ID must be an integer').trim().escape()
  ];
}

const addUpdateCustomerValidationRules = () => {
  return [
    check('first_name').matches('[a-zA-Z]').not().matches('[0-9]').trim().escape(),
    check('last_name').matches('[a-zA-Z]').not().matches('[0-9]').trim().escape(),
    check('company').matches('[0-9a-zA-Z]').optional({checkFalsy: true}).trim().escape(),
    check('address').matches('[0-9a-zA-Z]').optional({checkFalsy: true}).trim().escape(),
    check('city').matches('[a-zA-Z]').not().matches('[0-9]').optional({checkFalsy: true}).trim().escape(),
    check('state').matches('[a-zA-Z]').not().matches('[0-9]').optional({checkFalsy: true}).trim().escape(),
    check('country').matches('[a-zA-Z]').not().matches('[0-9]').optional({checkFalsy: true}).trim().escape(),
    check('postal_code').matches('[0-9]').optional({checkFalsy: true}).trim().escape(),
    check('phone').matches('[0-9]').not().matches('[a-zA-z]').optional({checkFalsy: true}).trim().escape(),
    check('fax').matches('[0-9]').not().matches('[a-zA-Z]').optional({checkFalsy: true}).trim().escape(),
    check('email').isEmail().trim().escape().normalizeEmail(),
    check('support_rep_id').matches('[0-9]').trim().escape()
  ];
}

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const extractedErrors = [];
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }));

    return res.status(422).json({errors: extractedErrors});
  } else {
    next();
  }
}


module.exports = {
  getDeleteCustomerValidationRules,
  validate,
  addUpdateCustomerValidationRules
}