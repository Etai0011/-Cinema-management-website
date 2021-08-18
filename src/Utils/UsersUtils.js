import axios from 'axios'

const checkLogin=(user)=>{
    return axios.post('http://localhost:8001/auth/login', user)
}


const checkSignup=(user)=>{
    return axios.post('http://localhost:8001/auth/signup', user)
}

const getAllUsers=()=>{
    return axios.get('http://localhost:8001/all')
}

const addUser=(user)=>{
    return axios.post('http://localhost:8001/all', user)
}

const getUserById=(id)=>{
    return axios.get(`http://localhost:8001/all/${id}`)
}

const updateUser=(id,user)=>{
    return axios.put(`http://localhost:8001/all/${id}`,user)
}

const deleteUser=(id)=>{
    return axios.delete(`http://localhost:8001/all/${id}`)
}

export default {checkLogin,checkSignup,getAllUsers,addUser,getUserById,updateUser,deleteUser}