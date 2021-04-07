const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FileSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
})
const File = mongoose.model('File', FileSchema)
module.exports = File