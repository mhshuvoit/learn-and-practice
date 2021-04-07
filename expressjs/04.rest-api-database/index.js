const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const mongoose = require('mongoose')
const contactRoutes = require('./contactRoutes')

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/contact', contactRoutes)

// let testSchema = new mongoose.Schema({ // schema make a model
//     name: String
// })
// let Test = mongoose.model('Test', testSchema) //model is a object

// app.get('/', (req, res) => {
    // new Test({name: 'mh shuvo'}).save()
    // .then((r) => {
    //     res.json(r)
    // })
    // .catch((err) => {
    //     console.log(err)
    // })
// })

mongoose.connect('mongodb+srv://mhshuvoit:mhshuvoit@cluster1.xbs5i.mongodb.net/mongodb?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        const port = 5000
        app.listen(port, () => {
            console.log('Listening on port ' + port)
        })
    })
    .catch(error => {
        console.log(error)
    })
