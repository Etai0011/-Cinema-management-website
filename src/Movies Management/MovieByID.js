import React,{useEffect, useState} from 'react';
import Movie from './Movie'
import Utils from '../Utils/MoviesUtils'
import {useParams} from 'react-router-dom'

const MovieByID = () => {
    const [movie,setMovie]=useState({name:"", genres:[], premiered:new Date()})
    const [sub,setSubs]=useState([])
    const {id} = useParams()

    useEffect(async()=>{
        let resp = await Utils.getMovieById(id) 
        let resp1 = await Utils.getSubsByMovieId(id) 
        setMovie(resp.data)
        setSubs(resp1)
    },[])

    return (
        <div className="centerPage">
            <Movie movie={movie} subs={sub}/>
        </div>
    );
};

export default MovieByID;