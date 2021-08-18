const { response } = require('express')
const express = require('express')
const appRouter = express.Router()
const MemberBL = require('../models/MembersBL')



appRouter.route('/').get(async(req,resp)=>{
    const Members = await MemberBL.getAllMembers()
    return resp.json(Members.data)
})


appRouter.route('/:id').get(async(req,resp)=>{
    const id = req.params.id
    const Member = await MemberBL.getMemberById(id)
    return resp.json(Member.data)
})

appRouter.route('/').post(async(req,resp)=>{
    const MemberObj = req.body;
    const Member = await MemberBL.addMember(MemberObj)
    return resp.json("Member Added")

})

appRouter.route('/:id').put(async(req, resp)=>{
    const id = req.params.id
    const MemberObj = req.body
    const result = await MemberBL.updateMember(id,MemberObj)
    return resp.json(result.data)

})

appRouter.route('/:id').delete((req,resp)=>{
    const id = req.params.id
    MemberBL.deleteMember(id)
    resp.json("Deleted")

})



module.exports = appRouter