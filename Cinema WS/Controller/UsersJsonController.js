const express = require('express')
const appRouter = express.Router()
const UsersJsonBL = require('../Models/UsersJsonBL')


appRouter.route('/').get(async(req,resp)=>{
    let Users = await UsersJsonBL.getAllUsers()
    return resp.json(Users)
})


appRouter.route('/:id').get(async(req,resp)=>{
    let id = req.params.id 
    let User = await UsersJsonBL.getUserById(id)
    return resp.json(User)
})


appRouter.route('/').post(async(req,resp)=>{
    let UserObj = req.body;
    let user = await UsersJsonBL.addUser(UserObj)
    return resp.json(user)
})


appRouter.route('/:id').put(async(req,resp)=>{
    let id = req.params.id 
    let UserObj = req.body
    let result = await UsersJsonBL.updateUser(id,UserObj)
    return resp.json(result)
})


appRouter.route('/:id').delete(async(req,resp)=>{
    let id = req.params.id
    let result = await UsersJsonBL.deleteUser(id)
    return resp.json(result)
})


module.exports = appRouter