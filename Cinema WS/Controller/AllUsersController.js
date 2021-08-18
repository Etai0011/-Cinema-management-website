const express = require('express')
const appRouter = express.Router()
const allUsersBL = require('../models/AllUsersBL')


appRouter.route('/').get(async(req,resp)=>{
    const Users = await allUsersBL.getAllObjects()
    return resp.json(Users)
})


appRouter.route('/:id').get(async(req,resp)=>{
    const id = req.params.id
    const User = await allUsersBL.getObjectById(id)
    return resp.json(User)
})

appRouter.route('/').post(async(req,resp)=>{
    const UserObj = req.body;
    const User = await allUsersBL.addObject(UserObj)
    return resp.json("the user add to the system")

})

appRouter.route('/:id').put(async(req, resp)=>{
    const id = req.params.id
    const UserObj = req.body
    await allUsersBL.updateObject(id,UserObj)
    return resp.json("User was updated")

})

appRouter.route('/:id').delete(async(req,resp)=>{
    const id = req.params.id
    await allUsersBL.deleteObject(id)
    return resp.json("user deleted")
})


module.exports = appRouter