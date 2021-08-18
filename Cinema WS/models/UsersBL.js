const user = require('./UsersSCHEMA')

const getAllUsers = () => {

    return new Promise((resolve, reject) => {
        user.find({}, (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })

    })
}

const getUserById = (UserId) => {
    return new Promise((resolve, reject) => {
        user.findById(UserId, (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}


const addUser = (nuser) => {
    return new Promise((resolve, reject) => {

        const newUser = new user({
            userName: nuser.userName,
            password: nuser.password
        }) 
        newUser.save((err) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(newUser)
            }
        })
    })
}


const updateUser = (UserId, updatedUser) => {
    return new Promise((resolve, reject) => {
        user.findByIdAndUpdate(UserId, {
            userName: updatedUser.userName,
            password: updatedUser.password
        }, (err) => {
            if (err) {
                reject(err)
            }
            else {
                resolve("user was updated!")
            }
        })

    })
}

const deleteUser = (UserId) => {
    return new Promise((resolve, reject) => {
        user.findByIdAndDelete(UserId, (err) => {
            if (err) {
                reject(err)
            }
            else {
                resolve("user deleted!!!")
            }
        })
    })
}

module.exports = { getAllUsers, getUserById, addUser, updateUser, deleteUser }