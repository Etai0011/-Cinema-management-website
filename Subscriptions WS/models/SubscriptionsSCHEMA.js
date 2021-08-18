const mongoose = require('mongoose')

const appSchema = mongoose.Schema

const SubscriptionSchema = new appSchema({
    memberId : String,
    movies: [{
        movieId:String,
        watchDate:Date
    }]

})

module.exports = mongoose.model('Subscription', SubscriptionSchema)