const Member = require('./MembersSCHEMA')
const fetch = require('node-fetch')
const axios = require('axios')


const getAllData = async () => {
    let data = await fetch("https://jsonplaceholder.typicode.com/users")
    if(data.ok) {
        let arrMembers = await data.json()
        for(let i=0; i< arrMembers.length;i++){
            await addMember({
                name: arrMembers[i].name,
                email: arrMembers[i].email,
                city: arrMembers[i].address.city
            })
    }}
}



const getAllMembers = ()=> {

    return new Promise((resolve, reject)=>{
        Member.find({},(err, data)=>{
            if(err){
                reject(err)
            } 
            else{
                resolve(data)
            }
        })

    })
}


const getMemberById = (MemberId)=> {
    return new Promise((resolve, reject)=>{
        Member.findById(MemberId,(err,data)=>{
            if(err){
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}



const addMember = (member)=> {
    return new Promise((resolve,reject)=> {

        const newMember = new Member({
            name : member.name,
            email: member.email, 
            city: member.city
        })
        newMember.save((err)=>{
            if(err){
                reject(err)
            }
            else {
                resolve(newMember)
            }
        })
    })
}




const updateMember = (MemberId, updateMember) => {
    return new Promise((resolve, reject)=>{
        Member.findByIdAndUpdate(MemberId,{
            name : updateMember.name,
            email: updateMember.email, 
            city: updateMember.city
        },(err)=>{
            if(err){
                reject(err)
            }
            else {
                resolve("Member was updated!")
            }
        })

    })
}

const deleteMember = (MemberId)=> {
    return new Promise((resolve,reject)=>{
        Member.findByIdAndDelete(MemberId,(err)=>{
            if(err){
                reject(err)
            }
            else{
                resolve("Member deleted!!!")
            }
        })
    })
}

module.exports = {getAllData,getAllMembers,getMemberById,addMember,updateMember,deleteMember}