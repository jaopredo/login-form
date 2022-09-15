const mongoose = require('../connection')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    user: { required: true, type: String },
    email: { required: true, type: String },
    password: { required: true, type: String },
})

UserSchema.pre('save', function(next){
    const salt = bcrypt.genSaltSync(Number(process.env.PASSW_SALT))
    this.password = bcrypt.hashSync(this.password, salt)

    next()
})

const User = mongoose.model('User', UserSchema)

module.exports = User