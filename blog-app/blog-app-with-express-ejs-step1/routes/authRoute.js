const router = require('express').Router()
const signUpValidator = require('../validator/auth/signupValidator')
const laginValidator = require('../validator/auth/laginValidator')
const {
    signupGetController,
    signupPostController,
    loginGetController,
    loginPostController,
    logoutController
} = require('../controllers/authController')
const { isAuthenticated, isUnAuthenticated } = require('../middlewares/authMiddleware')

router.get('/signup', signupGetController)
router.post('/signup', signUpValidator, signupPostController)
router.get('/login', loginGetController)
router.post('/login', laginValidator, loginPostController)
router.get('/logout', signUpValidator, logoutController)

module.exports = router