const express = require('express')
const appRouter = express.Router()
const PermissionsJsonBL = require('../Models/PermissionsJsonBL')


appRouter.route('/').get(async(req,resp)=>{
    let Permissions = await PermissionsJsonBL.getAllPermissions()
    return resp.json(Permissions)
})


appRouter.route('/:id').get(async(req,resp)=>{
    let id = req.params.id 
    let Permission = await PermissionsJsonBL.getPermissionById(id)
    return resp.json(Permission)
})


appRouter.route('/').post(async(req,resp)=>{
    let PermissionObj = req.body;
    let Permission = await PermissionsJsonBL.addPermission(PermissionObj)
    return resp.json(Permission)
})


appRouter.route('/:id').put(async(req,resp)=>{
    let id = req.params.id 
    let PermissionObj = req.body
    let result = await PermissionsJsonBL.updatePermission(id,PermissionObj)
    return resp.json(result)
})


appRouter.route('/:id').delete(async(req,resp)=>{
    let id = req.params.id
    let result = await PermissionsJsonBL.deletePermission(id)
    return resp.json(result)
})


module.exports = appRouter