const express = require('express')
const appRouter = express.Router()
const UserBL = require('../models/UsersBL')



appRouter.route('/').get(async(req,resp)=>{
    const Users = await UserBL.getAllUsers()
    return resp.json(Users)
})


appRouter.route('/:id').get(async(req,resp)=>{
    const id = req.params.id
    const User = await UserBL.getUserById(id)
    return resp.json(User)
})

appRouter.route('/').post(async(req,resp)=>{
    const UserObj = req.body;
    const User = await UserBL.addUser(UserObj)
    return resp.json(User)

})

appRouter.route('/:id').put(async(req, resp)=>{
    const id = req.params.id
    const UserObj = req.body
    const result = await UserBL.updateUser(id,UserObj)
    return resp.json(result)

})

appRouter.route('/:id').delete(async(req,resp)=>{
    const id = req.params.id
    const result = await UserBL.deleteUser(id)
    return resp.json(result)
})



module.exports = appRouter