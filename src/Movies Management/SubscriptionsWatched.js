import React from 'react';
import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Utils from '../Utils/MoviesUtils'

const SubscriptionsWatched = (props) => {
   

    return (
        <div>
           <b className="fontStyleMovies">Subscriptions watched: </b>
            <ul>
            {props.watched.map((sub,index)=>{
               return <li className="moviesWatched" key={index}> <Link to={`/Main/subscriptions/${sub.id}`}>{sub.name}</Link>, {sub.watchDate.slice(0,10)}</li>
            }) }
            </ul>
        </div>
    );
};

export default SubscriptionsWatched;