import React,{useEffect, useState} from 'react';
import Utils from '../Utils/MoviesUtils'
import Movie from './Movie'
import {useSelector} from 'react-redux'
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { GridList, GridListTile } from '@material-ui/core';

const MainMovies = () => {
    const [movies, setMovies]=useState([])
    const [exactMovies, setExactMovies]=useState([])
    const movieChange=useSelector(state=>state.changeMovie)
    const permissions=useSelector(state=>state.permissions)
    const [search, setSearch]=useState("")

    useEffect(async()=>{
        let ans=await Utils.getWatchedSubscriptions()
        setMovies(ans)
        setExactMovies(ans)
    },[movieChange]) 

    const findMovie= ()=>{
        let arr=movies.filter((movie)=>movie.movie.name.includes(search))
        setExactMovies(arr)
    }
    let view=<div></div>;
    if(permissions.includes("Admin") || permissions.includes("View Movies")){
        view = <div>
       <div className="centerItems">
       <b className="fontStyle">Find Movie: </b> &nbsp; <input type="text" className="heighttextS" onChange={(e)=>setSearch(e.target.value)}/> 
       <IconButton onClick={findMovie}  color="secondary">
        <SearchIcon fontSize="large" style={{marginTop:"-12px"}}/>
      </IconButton>
       </div>
       <GridList cols={4}>
        {exactMovies.map((movie,index) => {
                return <GridListTile key={index} className="movieHeight" cols={index%2}>
                    <Movie key={index} movie={movie.movie} subs={movie.subscriptions}/>
                </GridListTile>
            })}
       </GridList>
    </div>
    }  
    else{
        alert("You do not have permission to do this, ask the administrator for permission")
    }
    return (
        <div>
            {view}
        </div>
    );
};

export default MainMovies;