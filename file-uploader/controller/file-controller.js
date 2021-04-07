const File = require('../Modal/File-Modal')

const fileUpload = (req, res) => {
    let file = new File({
        name: req.body.name,
        image: req.file.path
    })
    file.save()
        .then(response => {
            res.status(201).json({
                msz: 'File Uploaded Successfully',
                response
            })
        })
        .catch(err => {
            res.status(500).json({
                msz: 'Error Occurred',
                err
            })
        })
}
const getFile = (req, res) => {
    File.find()
        .then(response => {
            res.status(200).json({
                msz: 'All File',
                response
            })
        })
        .catch(err => {
            res.status(500).json({
                msz: 'Error',
                err
            })
        })
}

module.exports = {
    fileUpload,
    getFile
}