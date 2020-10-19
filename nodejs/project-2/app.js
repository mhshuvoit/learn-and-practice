const express = require('express')
const morgan = require('morgan')

const app = express()
app.set('view engine', 'ejs')
// app.set('views', 'templete/views')

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/about', (req, res) => {
    res.render('pages/about', {title: 'I am about page app'})
})

app.get('/help', (req, res) => {
    res.render('pages/help', {title: 'I am help page app'})
})

app.get('/', (req, res) => {
    let post = {
        title: 'Title',
        body: 'body',
        published: true
    }

    let posts = [
        { title: 'Title 1', author: 'shuvo' },
        { title: 'Title 2', author: 'shuvo' },
        { title: 'Title 3', author: 'shuvo' },
        { title: 'Title 4', author: 'shuvo' }
    ]

    res.render('pages/index', { title: 'EJS is Awesome templete engine', post, posts })
})

app.get('*', (req, res) => {
    res.send('<h1>Please use the currect router</h1>')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})