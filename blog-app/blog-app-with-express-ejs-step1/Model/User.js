const { Schema, model } = require('mongoose')
// const Profile = require('./Profile')

const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: true,
        maxlength: 15
    },
    email: { // email will be normalize not trim
        type: String,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    profile: {
        type: Schema.Types.ObjectId,
        ref: 'Profile'
    }
}, {
    timestamps: true
})

const User = model('User', userSchema)

module.exports = User