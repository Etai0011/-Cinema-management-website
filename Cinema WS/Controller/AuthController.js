const express = require('express')
const UsersBL=require('../models/UsersBL')
const appRouter = express.Router()

appRouter.route('/login').post (async (req, resp) => {
   let userInput=req.body
   let allUsers=await UsersBL.getAllUsers()
   let IsLogin=false
   allUsers.forEach((user)=>{
       if(userInput.userName===user.userName) {
           if(userInput.password===user.password){
            IsLogin=true
            return resp.json(user._id)
           } 
           else return resp.json("Please try again")
       }
   }) 
   if(!IsLogin)
   { return resp.json("User doesnt exist") }
})

appRouter.route('/signup').post (async (req, resp) => {
   let userInput=req.body
   let allUsers=await UsersBL.getAllUsers()
   for(let i=0; i<allUsers.length; i++){
        if(userInput.userName===allUsers[i].userName) {
            if(userInput.password.length<4){
                return resp.json("The password has to be at least 4 characters")
            }
            else {
                let ans=await UsersBL.updateUser(allUsers[i]._id, userInput)
                return resp.json(ans)
            }
        }
    }
            return resp.json("User doesnt exist at the system")
    })

module.exports = appRouter