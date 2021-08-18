import axios from 'axios'
import SubscriptionsUtils from './SubscriptionsUtils'

const getAllMovies= ()=> {
    return axios.get('http://localhost:8001/movies')
}

const getAllSubscriptions= ()=> {
    return axios.get('http://localhost:8001/subscriptions')
}

const getAllMembers= ()=> {
    return axios.get('http://localhost:8001/members')
}

const getMovieById=(id)=>{
    return axios.get(`http://localhost:8001/movies/${id}`)
}

const updateMovie=(id,movie)=>{
    return axios.put(`http://localhost:8001/movies/${id}`, movie)
}

const addMovie=(movie)=>{
    return axios.post(`http://localhost:8001/movies`, movie)
}

const deleteMovie=(id)=>{
    return axios.delete(`http://localhost:8001/movies/${id}`)
}

const getSubsByMovieId=async(id)=>{
    let subsById=await SubscriptionsUtils.getSubscriptionByMovieId(id)
    const subsData = await Promise.all(subsById.data.map(async(sub)=>{
        let member = await SubscriptionsUtils.getMemberById(sub.memberId)
        let movieIndex = sub.movies.findIndex(movie=>movie.movieId==id)
        return {
            id: member.data._id,
            name: member.data.name,
            watchDate: sub.movies[movieIndex].watchDate
        }
    }))
    return subsData;
}

const getWatchedSubscriptions=async(id)=>{
    let movies=await getAllMovies();
    const moviesAndSubs = movies.data.map(movie=>{
        return {
            id: movie._id,
            movie: movie,
            subscriptions:[]
        }
    })
    let subscriptions=await getAllSubscriptions()
    let members=await getAllMembers()
    subscriptions.data.forEach(sub=>{
        let findMember = members.data.filter(member=>member._id==sub.memberId);
        sub.movies.forEach(watchMovie=>{
            let movieIndex = moviesAndSubs.findIndex(movie=>movie.id==watchMovie.movieId);
            if(movieIndex>=0){
                moviesAndSubs[movieIndex].subscriptions.push({
                    id: sub.memberId,
                    movieId: moviesAndSubs[movieIndex].id,
                    name: findMember[0].name,
                    watchDate: watchMovie.watchDate
                })
            }
        })
    })
    return moviesAndSubs;
}

            
    


export default {getAllMovies, getAllSubscriptions,getAllMembers,getWatchedSubscriptions, getSubsByMovieId,getMovieById,updateMovie,addMovie,deleteMovie}