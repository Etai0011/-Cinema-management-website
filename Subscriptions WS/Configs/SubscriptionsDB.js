var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Subscriptions',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})