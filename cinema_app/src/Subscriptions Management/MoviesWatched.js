import React,{useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import SubsWatchedInfo from './SubsWatchedInfo'
import SubscriptionsUtils from '../Utils/SubscriptionsUtils'
import {Link} from 'react-router-dom'
import './MoviesWatched.css'

const MoviesWatched = (props) => {
    const itsChanged=useSelector(state=>state.isAddedMovie)
    const [isVisible,setVisibility]=useState(false)
    const [list,setList]=useState([])
    let changeVisibility=isVisible?"visibleStyle": "hiddenStyle"
    useEffect(async()=>{
        let ans=await SubscriptionsUtils.getMovieData(props.id)
        setList(ans)
    },[itsChanged]) 

    return (
        <div>
            <b className="fontStyleMovies">Movies Watched  </b> <br/>
            <input type="button" value="subscribe to new movie" className="but" onClick={()=>setVisibility(!isVisible)}/>
            <div className={changeVisibility}><SubsWatchedInfo id={props.id} movies={list}/></div>
            <ul>
                {list.map((li,index)=>{
                   return <li className="moviesWatched" key={index}> <Link to={`/Main/movies/${li.id}`}>{li.name}</Link>, {li.watchedDate.slice(0,10)} </li>
                })}
            </ul>
        </div>
    );
};

export default MoviesWatched;