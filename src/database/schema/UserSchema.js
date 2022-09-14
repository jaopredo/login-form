const mongoose = require('../connection')

const UserSchema = new mongoose.Schema({
    name: { required: true, type: String },
    email: { required: true, type: String },
    password: { required: true, type: String },
})

const User = mongoose.model('User', UserSchema)

module.exports = User