const express = require('express')
const morgan = require('morgan')
const routes = require('./routes')

const app = express()

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/contact', routes)

app.get('*', (req, res) => {
    res.send('<h1>Please use the correct routes</h1>')
})

const port = 5000
app.listen(port, () => {
    console.log('Listening on port ' + port)
})