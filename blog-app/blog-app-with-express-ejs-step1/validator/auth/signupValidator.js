const { body } = require('express-validator')
const User = require('../../Model/User')

module.exports = [
    body('username')
        .isLength({ max: 15, min: 3 }).withMessage('User must be between 3 to 15 Chars')
        .custom(async username => {
            let user = await User.findOne({ username })
            if (user) {
                return Promise.reject('Username already used')
            }
        })
        .trim(),

    body('email')
        .isEmail().withMessage('Please provide a Valid email')
        .custom(async email => {
            let user = await User.findOne({ email })
            if (user) {
                return Promise.reject('Eamil already used')
            }
        })
        .normalizeEmail(),

    body('password')
        .isLength({ min: 5 }).withMessage('Password must be greater than 5 character'),

    body('confirmPassword')
        .isLength({ min: 5 }).withMessage('Password must be greater than 5 character')
]