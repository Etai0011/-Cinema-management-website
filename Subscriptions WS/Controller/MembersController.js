const express = require('express')
const appRouter = express.Router()
const MemberBL = require('../models/MembersBL')



appRouter.route('/').get(async(req,resp)=>{
    const Members = await MemberBL.getAllMembers()
    return resp.json(Members)
})


appRouter.route('/:id').get(async(req,resp)=>{
    const id = req.params.id
    const Member = await MemberBL.getMemberById(id)
    return resp.json(Member)
})

appRouter.route('/').post(async(req,resp)=>{
    const MemberObj = req.body;
    const Member = await MemberBL.addMember(MemberObj)
    return resp.json(Member)

})

appRouter.route('/:id').put(async(req, resp)=>{
    const id = req.params.id
    const MemberObj = req.body
    const result = await MemberBL.updateMember(id,MemberObj)
    return resp.json(result)

})

appRouter.route('/:id').delete(async(req,resp)=>{
    const id = req.params.id
    const result = await MemberBL.deleteMember(id)
    return resp.json(result)
})



module.exports = appRouter