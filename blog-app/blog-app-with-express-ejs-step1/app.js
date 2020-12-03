require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)
const flash = require('connect-flash')

// Routes
const authRoute = require('./routes/authRoute')
const dashboardRouter = require('./routes/dashboardRouter')

// Middleware
const { bindUserWithRequest } = require('./middlewares/authMiddleware')
const SetLocal = require('./middlewares/setLocal')

// Playground
// const Playground = require('./playground/validator')

// const MONGO_URI = 'mongodb://localhost:27017/blog-app'
const MONGO_URI = `mongodb+srv://${process.env.DB_ADMIN}:${process.env.DB_PASSWORD}@cluster1.xbs5i.mongodb.net/blog-app-with-express-ejs?retryWrites=true&w=majority`

var store = new MongoDBStore({
    uri: MONGO_URI,
    collection: 'session',
    expires: 1000 * 60 * 60 * 2
})

const app = express()

// Checking Environment
if (app.get('env').toLowerCase() === 'development') {
    app.use(morgan('dev'))
}
// console.log(process.env.NODE_ENV)
// console.log(app.get('env'))
// set NODE_ENV = DEVELOPMENT (run in console)

// EJS setup
app.set('view engine', 'ejs')
app.set('views', 'views')

// Middleware
const middleware = [
    express.static('public'),
    express.urlencoded({ extended: true }),
    express.json(),
    session({
        secret: process.env.Secret_Key || 'Secret_Key',
        resave: false,
        saveUninitialized: false,
        store: store
    }),
    bindUserWithRequest(),
    SetLocal(),
    flash()
]
app.use(middleware)

app.use('/auth', authRoute)
app.use('/dashboard', dashboardRouter)
// app.use('/playground', Playground)

app.get('/', (req, res) => {
    res.send('<h1>the currect router</h1>')
})

const PORT = process.env.PORT || 5000
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('Database Connected Established')
        app.listen(PORT, () => {
            console.log(`Running on port ${PORT}`)
        })
    })
    .catch(err => {
        console.log(err)
    })
