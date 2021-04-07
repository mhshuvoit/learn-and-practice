const express = require('express')
const router = express.Router()

const fileController = require('../controller/file-controller')
const fileUpload = require('../middleware/file-middleware')

router.post('/add', fileUpload.single('image'),
 fileController.fileUpload)
router.get('/get', fileController.getFile)

module.exports = router