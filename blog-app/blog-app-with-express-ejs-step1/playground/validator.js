const router = require('express').Router()
const { check, validationResult } = require('express-validator')
const Flash = require('../utils/Flash')

router.get('/validator', (req, res, next) => {
    console.log(Flash.getMessage(req))
    res.render('playground/signup', { title: 'validator playground' })
   
})

router.post('/validator', [
    check('username')
        .not()
        .isEmpty()
        .withMessage('Username can not be empty')
        .isLength({ max: 15 })
        .withMessage('Username can not be greater than 15 character')
        .trim(), //sanitizer

    check('email')
        .isEmail()
        .withMessage('Please provide a email')
        .normalizeEmail(), //sanitizer

    check('password')
        .custom((value) => {
            if (value.length < 5) {
                throw new Error('Password must be greater than 5 character')
            }
            return true
        }),

    check('confirmPassword')
        .custom((value, { req }) => {
            if (value !== req.body.confirmPassword) {
                throw new Error('Password does not match')
            }
            return true
        })

], (req, res, next) => {
    let errors = validationResult(req)
    // console.log(errors)
    // console.log(errors.isEmpty())
    // console.log(errors.array())
    // console.log(errors.mapped())
    
    // console.log(req.body.username)
    // console.log(req.body.email)
    // const formetter = (error) => error.msg
    // console.log(errors.formatWith(formetter).mapped())
    // res.render('playground/signup', { title: 'validator playground' })


    //flaash msz
    if(!errors.isEmpty()) {
        req.flash('fail', 'There is some error')
    } else {
        req.flash('success', 'There is no error')
    }
    res.redirect('/playground/validator')
})

module.exports = router