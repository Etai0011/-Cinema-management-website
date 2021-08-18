const mongoose = require('mongoose')

const appSchema = mongoose.Schema

const memberSchema = new appSchema({
    name:String,
    email:String,
    city:String
})

module.exports = mongoose.model('member', memberSchema)