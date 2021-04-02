const express = require('express')
const morgan = require('morgan')

const app = express()

app.use(morgan('dev'))

// app.set('views', './views') // specify the views directory
app.set('view engine', 'ejs') // register the template engine

app.get('/help', (req, res) => {
    res.render('pages/help.ejs')
})

app.get('/about', (req, res) => {
    res.render('pages/about.ejs', { title: 'About'})
})

app.get('/', (req, res) => {
    let post = {
        title: 'This is Title',
        body: 'This is Body',
        published: true
    }
    let posts = [
        {
            title: 'This is Title',
            body: 'This is Body'
        },
        {
            title: 'This is Title 2',
            body: 'This is Body 2'
        },
        {
            title: 'This is Title 3',
            body: 'This is Body 3'
        }
    ]
    res.render('pages/index', { title: 'Ejs is templete engine', post, posts })
})

app.get('*', (req, res) => {
    res.send('<h1>Please use the correct routes</h1>')
})

const port = 5000
app.listen(port, () => {
    console.log('Listening on port ' + port)
})

// expressjs provide us a view engine and we can register the view engine with any template engine like ejs