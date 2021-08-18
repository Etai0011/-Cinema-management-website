const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const moviesController = require('./Controller/MoviesController')
const subscriptionsController = require('./Controller/SubscriptionsController')
const membersController = require('./Controller/MembersController')
const app = express()
const moviesBL=require('./models/MoviesBL')
const membersBL=require('./models/MembersBL')
require("./configs/SubscriptionsDB")

membersBL.getAllData()
moviesBL.getAllData()

app.use(cors())
app.use(bodyParser.urlencoded({extended:true})).use(bodyParser.json())
app.use('/movies',moviesController)
app.use('/subscriptions',subscriptionsController)
app.use('/members',membersController)

app.listen(8000,()=>{
    console.log("The server is up");
})