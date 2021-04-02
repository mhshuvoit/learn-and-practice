const router = require('express').Router()
const { getPost } = require('./postController')

router.get('/', getPost)

router.get('/:id/review/:reviewID', (req, res) => {
    res.send(`Render special post ${req.params.id} and ${req.params.reviewID}`)
})

router.post('/', (req, res) => {
    res.send('<h1>Create new Post</h1>')
})

router.put('/', (req, res) => {
    res.send('Update post')
})

router.delete('/', (req, res) => {
    res.send('Delete post')
})

router.delete('/:id', (req, res) => {
    res.send('Delete specific post ' + req.params.id)
})

module.exports = router