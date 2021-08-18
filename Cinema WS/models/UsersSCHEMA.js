const mongoose = require('mongoose')

const appSchema = mongoose.Schema

const userSchema = new appSchema({
    userName:String,
    password:String
})


module.exports = mongoose.model('user', userSchema)