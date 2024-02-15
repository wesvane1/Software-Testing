// const { check } = require('express-validator');

// exports.birthdayValidation = [
//     // check('name', 'Name is requied').not().isEmpty(),
//     // check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
//     // check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
//     check('birthday', 'please input birthday as MM/DD/YYYY').custom((value, { req }) => {
//         if (!moment(value, 'MM/DD/YYYY', true).isValid()) {
//             throw new Error('Please enter a valid date in MM/DD/YYYY format');
//         }
//         return true;
//     })
// ]

const { body } = require('express-validator');

const birthdayValidationRules = () => {
    return [
        body('birthday').isLength({ min: 10 }).withMessage('please input birthday as MM/DD/YYYY')
    ];
};

const validate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
  
    return res.status(422).json({
      errors: extractedErrors,
    })
  }

module.exports = { birthdayValidationRules, validate }
// exports.loginValidation = [
//      check('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
//      check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
// ]