const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const usersController=require('./Controller/UsersController')
const moviesController = require('./Controller/MoviesController')
const subscriptionsController = require('./Controller/SubscriptionsController')
const membersController = require('./Controller/MembersController')
const authController = require('./Controller/AuthController')
const usersJsonController = require('./Controller/UsersJsonController')
const permissionsController = require('./Controller/PermissionsController')
const allUsersController=require('./Controller/AllUsersController')

const app = express()
require("./configs/UsersDB")

app.use(cors())
app.use(bodyParser.urlencoded({extended:true})).use(bodyParser.json())
app.use('/users',usersController)
app.use('/movies',moviesController)
app.use('/subscriptions',subscriptionsController)
app.use('/members',membersController)
app.use('/auth',authController)
app.use('/uj',usersJsonController)
app.use('/perm',permissionsController)
app.use('/all',allUsersController)

app.listen(8001,()=>{
    console.log("The server is up");
})