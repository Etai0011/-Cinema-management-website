const jsonfile = require('jsonfile')


const getAllUsers = ()=> {
    return new Promise ((resolve, reject)=>{
        jsonfile.readFile('./jsonFiles/Users.json',(err,data)=>{
            if(err){
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}


const getUserById = (UserId)=> {
    return new Promise ((resolve, reject)=>{
        jsonfile.readFile('./jsonFiles/Users.json',(err,data)=>{
            if(err){
                reject(err)
            }
            else {
                let result = data.filter(user=> user.id == UserId)
                resolve(result)
            }
        })
    })
}


const addUser = async (NewUser)=>{
    let str = "User Created"
    let Users = await getAllUsers()
    let user = Users.filter(item=>item.id == NewUser.id)
    if(user.length > 0){
        str = "User Already In The System"
    } else {
        Users.push(NewUser)
    }
    return new Promise((resolve,reject)=>{
        jsonfile.writeFile('./jsonFiles/Users.json',Users,(err)=>{
            if(err){
                reject(err)
            } else {
                 resolve(str)
            }
        })
    })      
}


const updateUser = async (UserId, UpdatedData)=>{
    let Users = await getAllUsers()
    let index =Users.findIndex(user=>user.id==UserId)
    Users[index]=UpdatedData
    return new Promise((resolve,reject)=>{
        jsonfile.writeFile('./jsonFiles/Users.json',Users,(err)=>{
            if(err){
                reject(err)
            } else {
                resolve("User Updated")
            }
        })   
    })
}


const deleteUser = async (UserId)=>{
    let Users = await getAllUsers()
    let NewUsers = Users.filter(item=>item.id != UserId)
    return new Promise((resolve,reject)=>{
        jsonfile.writeFile('./jsonFiles/Users.json',NewUsers,(err)=>{
            if(err){
                reject(err)
            } else {
                resolve("User Deleted")
            }
        }) 
    })
}


module.exports = {deleteUser,updateUser,addUser,getUserById,getAllUsers}