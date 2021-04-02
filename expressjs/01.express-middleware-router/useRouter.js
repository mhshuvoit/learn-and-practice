const router = require('express').Router()

router.get('/login', (req, res) => {
    console.log(req.query) //sort, pagination, filter
    res.send('<h1>Login</h1>')
})

router.get('/logout', (req, res) => {
    res.send('<h1>Logout</h1>')
})

router.get('/signup', (req, res) => {
    res.send('<h1>Signup</h1>')
})

module.exports = router