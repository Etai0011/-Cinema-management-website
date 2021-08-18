import React, {useEffect,useState} from 'react';
import SubscriptionsUtils from '../Utils/SubscriptionsUtils'
import {useDispatch} from 'react-redux';

const SubsWatchedInfo = (props) => {
    const[subscribe,setSubscribe]=useState({movieId:"", watchDate:""})
    const dispatch=useDispatch()
    const[unWatchedMovies,setUnWatchedMovies]=useState([])
    useEffect(async()=>{
        let ans=await SubscriptionsUtils.unWatchedMoviesByMember(props.id)
        if(ans.length>0){
            setSubscribe({movieId: ans[0]._id, watchDate:new Date().toLocaleDateString().slice(0,10)})  
        }
        setUnWatchedMovies(ans)
    },[]);

    const insert=async()=>{
        if(props.movies.length==0){
            const newSubscription = {
                memberId: props.id,
                movies: [subscribe]
            };
           await SubscriptionsUtils.addSubscription(newSubscription);
        }
        else{
            const watchedMovies = props.movies.map(movie=>{
                return {
                    movieId: movie.id,
                    watchDate: movie.watchedDate
                }
            })
            watchedMovies.push(subscribe)
            await SubscriptionsUtils.editSubscriptions(props.id, {
                memberId: props.id,
                movies: watchedMovies
            })
        }
        let action={
            type:'ADDTOLIST',
            payload:subscribe.movieId
        }
        dispatch(action)
        alert("movie added to the list")
    }
    
    return (
        <div>
            <b className="fontStyleMovies">Add a new movie</b> <br/>
            <select onChange={(e)=>{
                setSubscribe({...subscribe,movieId:e.target.value})}}> 
                <br/>
                {unWatchedMovies.map((movie,index)=>{
                    return <option key={index} value={movie._id}>{movie.name} </option> 
                })} <br/>
            </select> 
            <input type="date" onChange={(e)=>setSubscribe({...subscribe,watchDate: new Date(e.target.value)})}/> <br/>
            <input type="button" value="Subscribe" className="but" onClick={insert}/>
        </div>
    );
};

export default SubsWatchedInfo;