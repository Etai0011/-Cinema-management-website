const mongoose = require('mongoose')

const appSchema = mongoose.Schema

const movieSchema = new appSchema({
    name : String,
    genres: [String], 
    image : String,
    premiered:Date  

})

module.exports = mongoose.model('movie', movieSchema)