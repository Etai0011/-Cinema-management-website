const jsonfile = require('jsonfile')


const getAllPermissions = ()=> {
    return new Promise ((resolve, reject)=>{
        jsonfile.readFile('./jsonFiles/Permissions.json',(err,data)=>{
            if(err){
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}


const getPermissionById = (PermissionId)=> {
    return new Promise ((resolve, reject)=>{
        jsonfile.readFile('./jsonFiles/Permissions.json',(err,data)=>{
            if(err){
                reject(err)
            }
            else {
                let result = data.filter(Permission=> Permission.id == PermissionId)
                resolve(result)
            }
        })
    })
}


const addPermission = async (NewPermission)=>{
    let Print = "Permission Created"
    let Permissions = await getAllPermissions()
    let Permission = Permissions.filter(item=>item.id == NewPermission.id)
    if(Permission.length > 0){
        Print = "Permission Already In The System"
    } else {
        Permissions.push(NewPermission)
    }
    return new Promise((resolve,reject)=>{
        jsonfile.writeFile('./jsonFiles/Permissions.json',Permissions,(err)=>{
            if(err){
                reject(err)
            } else {
                 resolve(Print)
            }
        })
    })      
}


const updatePermission = async (PermissionId, UpdatedData)=>{
    let Permissions = await getAllPermissions()
    arr = []
    Permissions.map(item=>{
        if(item.id == PermissionId){
            item = UpdatedData
        }
        arr.push(item)
        return arr
    })
    return new Promise((resolve,reject)=>{
        jsonfile.writeFile('./jsonFiles/Permissions.json',arr,(err)=>{
            if(err){
                reject(err)
            } else {
                resolve("Permission Updated")
            }
        })   
    })
}


const deletePermission = async (PermissionId)=>{
    let Permissions = await getAllPermissions()
    let NewPermission = Permissions.filter(item=>item.id != PermissionId)
    return new Promise((resolve,reject)=>{
        jsonfile.writeFile('./jsonFiles/Permissions.json',NewPermission,(err)=>{
            if(err){
                reject(err)
            } else {
                resolve("Permission Deleted")
            }
        }) 
    })
}


module.exports = {deletePermission,updatePermission,addPermission,getPermissionById,getAllPermissions}