const express = require('express')
const morgan = require('morgan')
const ContactRouter = require('./contactsRoute')

const app = express()
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/contacts', ContactRouter)

app.get('*', (req, res) => {
    res.send('<h1>Please use the currect router</h1>')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})