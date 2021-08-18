import React, {useEffect, useState} from 'react';
import {useHistory, useParams} from 'react-router-dom'
import Utils from '../Utils/MoviesUtils'


const MoviesEdit = () => {
    const [movie,setMovie]=useState({name:"", genres:"", image:"", premiered:""})
    const history=useHistory()
    const {id} = useParams()
    useEffect(async()=>{
        let resp = await Utils.getMovieById(id) 
        setMovie(resp.data)
    },[])
    const update=async()=>{
        let ans=await Utils.updateMovie(id,movie)
        alert(ans.data)
        history.push('/Main/movies')
    }


    

    return (
    <div className="centerPage">
       <b className="fontStyle">Edit Movie: </b>&nbsp; <span className="fontStyle">{movie.name}</span> <br/><br/>
       <b className="fontStyle">Name: </b>&nbsp; <input type="text" value={movie.name} className="heighttextS" onChange={(e)=>setMovie({...movie,name:e.target.value})}/> <br/><br/>
       <b className="fontStyle">Genres: </b>&nbsp; <input type="text" value={movie.genres} className="heighttextS" onChange={(e)=>setMovie({...movie,genres:e.target.value})}/><br/><br/>
       <b className="fontStyle">image url: </b>&nbsp; <input type="text" value={movie.image} className="heighttextS" onChange={(e)=>setMovie({...movie,image:e.target.value})}/> <br/><br/>
       <b className="fontStyle">Premired: </b>&nbsp;  <input type="text" value ={movie.premiered} className="heighttextS" onChange={(e)=>setMovie({...movie,premiered:e.target.value})}/><br/><br/>
    <input type="button" value="Update" className="primary" onClick={update}/>
    <input type="button" value="Cancel" className="del" onClick={()=>history.push('/Main/movies')}/>
    </div>
        
    );
};

export default MoviesEdit;