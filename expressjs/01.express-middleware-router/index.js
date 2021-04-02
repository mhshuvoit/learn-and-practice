// const express = require('express')
// const morgan = require('morgan')
// const useRouter = require('./useRouter')
// const postRouter = require('./postRouter')
// const app = express()
// // app.use(morgan('dev')) // we can use middleware two way. This is way and in router

// const customMiddleware = (req, res, next) => {
//     // console.log(req.url)
//     // console.log('I am a customMiddleware')
//     if (req.url === '/') {
//         res.send('<h1>Blocked by Admin</h1>')
//     }
//     next()
// }

// function tinyLogger() {
//     return (req, res, next) => {
//         console.log(req.method + ' - ' + req.url)
//         next()
//     }
// }

// const middleware = [customMiddleware, tinyLogger()]
// // app.use(customMiddleware)
// // app.use(middleware)

// // app.get('/about', morgan('dev'), (req, res) => {
// app.get('/about', (req, res) => {
//     // res.send('<h1>Hello About!</h1>')
//     res.json({
//         message: 'I json object'
//     })
// })

// // router start

// // router.get('/login', (req, res) => {
// //     res.send('<h1>Login</h1>')
// // })

// // router.get('/logout', (req, res) => {
// //     res.send('<h1>Logout</h1>')
// // })

// // router.get('/signup', (req, res) => {
// //     res.send('<h1>Signup</h1>')
// // })

// app.use('/user', useRouter)
// app.use('/posts', postRouter)
// // router end

// app.get('/', (req, res) => {
//     res.send('<h1>Hello World!</h1>')
// })

// app.get('*', (req, res) => {
//     res.send('<h1>404 not found</h1>')
// })

// const port = 5000
// app.listen(port, () => {
//     console.log(`Example app listening at http://localhost:${port}`)
// })


// // middleware, router, template engine
// // middleware is function that is working within request and response