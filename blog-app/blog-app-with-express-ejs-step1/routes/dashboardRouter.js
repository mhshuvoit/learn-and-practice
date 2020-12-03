const router = require('express').Router()
const { dashboardController } = require('../controllers/dashboardController')
const { isAuthenticated } = require('../middlewares/authMiddleware')

router.get('/', isAuthenticated, dashboardController)

module.exports = router