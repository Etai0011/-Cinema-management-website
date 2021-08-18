import axios from 'axios'
import MoviesUtils from './MoviesUtils'

const getAllMembers= ()=> {
    return axios.get('http://localhost:8001/members')
}

const getMemberById= (id)=> {
    return axios.get(`http://localhost:8001/members/${id}`)
}

const addMember= (member)=> {
    return axios.post('http://localhost:8001/members', member)
}

const addSubscription= (subscription)=> {
    return axios.post('http://localhost:8001/subscriptions', subscription)
}

const editMember= (id, member)=> {
    return axios.put(`http://localhost:8001/members/${id}`, member)
}

const editSubscriptions= async(id, member)=> {
    let subscription=await getSubscriptionsById(id)
    let subspriptionId=subscription.data._id
    return axios.put(`http://localhost:8001/subscriptions/${subspriptionId}`, member)
}

const deleteMember=async(id)=> {
    let index=await getSubscriptionsById(id)
    if(index.data!=="notWatchedYet"){
        await deleteSubscriptions(index.data._id)
        console.log(index.data._id)
    }
    return axios.delete(`http://localhost:8001/members/${id}`)
}

const deleteSubscriptions=(id)=> {
    return axios.delete(`http://localhost:8001/subscriptions/${id}`)
}

const getSubscriptionsById=(id)=>{
    return axios.get(`http://localhost:8001/subscriptions/${id}`)
}

const getSubscriptionByMovieId=(movieId)=>{
    return axios.get(`http://localhost:8001/subscriptions/subMovies/${movieId}`)
}

const unWatchedMoviesByMember=async(id)=>{
    let movies=await MoviesUtils.getAllMovies()
    let subById=await getSubscriptionsById(id)
    if(subById.data=="notWatchedYet"){
        return movies.data
    }
    const filMovies = []
    movies.data.forEach((movie)=>{
        let filWatchedMovies=subById.data.movies.filter((watchedMovie)=>
        watchedMovie.movieId==movie._id
        )  
        if(filWatchedMovies.length==0){
            filMovies.push(movie)
        }
    })
    return filMovies;
}

const getMovieData=async(id)=>{
    let subById=await getSubscriptionsById(id)
    if(subById.data=="notWatchedYet"){
        return [];
    }
    let filarr=await Promise.all(subById.data.movies.map(async(obj)=>{
        let movie = await MoviesUtils.getMovieById(obj.movieId);
        return {
            id: movie.data._id,
            name: movie.data.name,
            watchedDate: obj.watchDate
        }
    }))
    return filarr;
}

export default {getAllMembers,addMember,getSubscriptionByMovieId,editMember,deleteMember,addSubscription, deleteSubscriptions,getMemberById,unWatchedMoviesByMember,getSubscriptionsById,getMovieData,editSubscriptions}