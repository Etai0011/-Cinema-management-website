let PermissionsJsonBL = require ('./PermissionsJsonBL')
let UserJsonBL= require ('./UsersJsonBL')
let UsersBL= require ('./UsersBL')

let getAllObjects = async () => {
    let arr =[]
    let uJ = await UserJsonBL.getAllUsers()
    let users= await UsersBL.getAllUsers()
    let permissions= await PermissionsJsonBL.getAllPermissions()
   
    uJ.forEach((uJObj) => {
        let permObj=permissions.filter((permObj) => permObj.id === uJObj.id)
        let userObj=users.filter((userObj)=> userObj._id == uJObj.id)
            arr.push({                      
                id:uJObj.id,
                firstName:uJObj.firstName,
                lastName:uJObj.lastName,
                createDate:uJObj.createDate,
                sessionTimeOut:uJObj.sessionTimeOut,
                userName:userObj[0].userName,
                password:userObj[0].password,
                permissions:permObj[0].permissions})
                })
                return arr;
            }

        let getObjectById = async(id) => {
        let res = await getAllObjects()

        for (let i = 0; i < res.length; i++) {

            if (res[i].id == id) {
                return res[i];
            }
         }
         return null;
}


let addObject = async(userObj) => {
   let userDB = {
       userName : userObj.userName,
       password : userObj.password,
   }
   let newUser = await UsersBL.addUser(userDB)
   let userJson = {
       id : newUser.id,
       firstName : userObj.firstName,
       lastName : userObj.lastName,
       createDate : new Date(),
       sessionTimeOut : userObj.sessionTimeOut
   }
   UserJsonBL.addUser(userJson)

   let PermissionJson = {
       id : newUser.id,
       permissions : userObj.permissions
   }
   PermissionsJsonBL.addPermission(PermissionJson)
}

let updateObject = async(id, userObj) => {

   let user = {
       userName : userObj.userName,
       password : userObj.password,
   }
   await UsersBL.updateUser(id, user)
   let userJson = {
       id : id,
       firstName : userObj.firstName,
       lastName : userObj.lastName,
       createDate : userObj.createDate,
       sessionTimeOut : userObj.sessionTimeOut
   }
   await UserJsonBL.updateUser(id,userJson)
   let PermissionJson = {
       id : id,
       permissions : userObj.permissions
   }
   await PermissionsJsonBL.updatePermission(id,PermissionJson)
}


let deleteObject = (id) => {

   UsersBL.deleteUser(id)
   UserJsonBL.deleteUser(id)
   PermissionsJsonBL.deletePermission(id)
}

 module.exports = {deleteObject,updateObject,addObject,getObjectById,getAllObjects}
 
