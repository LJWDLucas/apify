const Validator = require('jsonschema').validate;

const validation = schema => (req, res, next) => {
  if (!schema) return next();

  const validationResult = Validator(req.body, schema);

  if (validationResult.valid) return next();

  return next({ errors: validationResult.errors });
};

module.exports = {
  validation
};
