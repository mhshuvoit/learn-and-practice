const fs = require('fs')
const path = require('path')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

const routes = require('./router/file-router')
app.use('/uploads/images', express.static(path.join('uploads', 'images')))
app.use('/upload', routes)

// mongoose.connect('mongodb+srv://mhshuvoit:mhshuvoit@cluster1.xbs5i.mongodb.net/msdp?retryWrites=true&w=majority', { useNewUrlParser: true, useCreateIndex: true }
// )
mongoose.connect('mongodb://localhost:27017/file-upload', { useNewUrlParser: true, useCreateIndex: true }
)
const db = mongoose.connection
db.on('error', (err) => {
    console.log(err)
})
db.once("open", () => {
    console.log("Database connected Established")
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})