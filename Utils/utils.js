const axios=require ('axios')

const getAll =  (url) =>{
    return axios.get(url)
}

const getById = (url,id)=>{
    return axios.get(`${url}/${id}`)
}

const addItem =(url,obj)=>{
    return axios.post(url,obj)
}   

const updateItem= (url,id,obj)=>{
    return axios.put(`${url}/${id}`,obj)
}
const removeItem = (url,id)=>{
    return axios.delete(`${url}/${id}`)
}

module.exports= {getAll,getById,addItem,updateItem,removeItem}
