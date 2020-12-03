const bcryptjs = require('bcryptjs')
const User = require('../Model/User')
const ValidationErrorFormatter = require('../utils/validationErrorFormatter')
const { validationResult } = require('express-validator')
const Flash = require('../utils/Flash')

exports.signupGetController = (req, res, next) => {
    res.render('pages/auth/signup', {
        title: 'Create a new account',
        error: {},
        value: {},
        flashMessage: Flash.getMessage(req)
    })
}

exports.signupPostController = async (req, res, next) => {
    let { username, email, password } = req.body

    let errors = validationResult(req).formatWith(ValidationErrorFormatter)

    if (!errors.isEmpty()) {
        req.flash('fail', 'Please check your form')
        return res.render('pages/auth/signup',
            {
                title: 'Create a new account',
                error: errors.mapped(),
                value: { username, email, password },
                flashMessage: Flash.getMessage(req)
            })
    }
    try {
        let hashPass = await bcryptjs.hash(password, 11)
        let user = new User({
            username, email, password: hashPass
        })
        await user.save()
        // console.log('success', createUser)
        // res.render('pages/auth/login', {
        //     title: 'Create a new account',
        //     error: {},
        //     value: {}
        // })
        req.flash('success', 'User created successfully')
        res.redirect('/auth/login')
    } catch (e) {
        console.log(e)
        next(e)
    }
}

exports.loginGetController = (req, res, next) => {
    // console.log(req.session.isLoggedIn)
    if (req.session.isLoggedIn) {
        return res.redirect('/dashboard')
    }
    res.render('pages/auth/login',
        {
            title: 'Login to your account',
            error: {},
            flashMessage: Flash.getMessage(req)
        })
}

exports.loginPostController = async (req, res, next) => {
    let { email, password } = req.body

    let errors = validationResult(req).formatWith(ValidationErrorFormatter)

    if (!errors.isEmpty()) {
        req.flash('fail', 'Please check your form')
        return res.render('pages/auth/login',
            {
                title: 'Login to your account',
                error: errors.mapped(),
                flashMessage: Flash.getMessage(req)
            })
    }

    try {
        let user = await User.findOne({ email })
        if (!user) {
            req.flash('fail', 'Please provide valid credentials')
            return res.render('pages/auth/login', {
                title: 'Login to your account',
                error: {},
                flashMessage: Flash.getMessage(req)
            })
        }

        let match = await bcryptjs.compare(password, user.password)
        if (!match) {
            req.flash('fail', 'Please provide valid credentials')
            return res.render('pages/auth/login', {
                title: 'Login to your account',
                error: {},
                flashMessage: Flash.getMessage(req)
            })
        }

        req.session.isLoggedIn = true
        req.session.user = user
        // cookie configer such as Expire, Max-Age, Domain, Secure, Http-Only
        req.session.save(err => { // if we do not everything is working but dispite we can save for safty
            if (err) {
                console.log(err)
                return next(err)
            }
            req.flash('success', 'Successfully Logged In')
            return res.redirect('/dashboard')
        })

    } catch (e) {
        console.log(e)
        next(e)
    }
}

exports.logoutController = (req, res, next) => {
    req.session.destroy(err => {
        if (err) {
            console.log(err)
            return next(err)
        }
        req.flash('success', 'Successfully Out')
        return res.redirect('/auth/login')
    })
}
