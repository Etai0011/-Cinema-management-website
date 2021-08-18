import React from 'react';
import {useHistory} from 'react-router-dom'
import SubscriptionsWatched from './SubscriptionsWatched'
import Utils from '../Utils/MoviesUtils'
import {useDispatch, useSelector} from 'react-redux'

const Movie = (props) => {
    const permissions=useSelector(state=>state.permissions)
    const history= useHistory()
    const dispatch=useDispatch()
    const deleteMovie= async()=>{
        if(permissions.includes("Admin") || permissions.includes("Delete Movies")){
        let ans=await Utils.deleteMovie(props.movie._id)
        alert(ans.data)
        let action={
            type:'DELETEMOVIE',
            payload:props.movie._id
        }
        dispatch(action)
    }
    else{
        alert("You do not have permission to do this, ask the administrator for permission")
    }
    }
    const handleEdit = ()=>{
        if(permissions.includes("Admin") || permissions.includes("Update Movies")){
        history.push(`/Main/movies/${props.movie._id}/edit`)
    }
    else{
        alert("You do not have permission to do this, ask the administrator for permission")
    }
}

    return (
        <div>
            <table> <tr> <td>  
            <b className="fontStyleMovies">{props.movie.name}, {new Date(props.movie.premiered).getFullYear()}</b> <br/>
            <span className="fontStyleMovies">genres: </span> <ul>{props.movie.genres.map((gener,index)=>{
                return <li className="fontStyleMovies" key={index}>{gener}</li>
            })}</ul> </td>  </tr> 
            <tr> <td>
            <img src={props.movie.image} width="100px" height="100px"/>
           </td> <td> <SubscriptionsWatched id={props.movie._id} watched={props.subs}/>  </td></tr></table>
        <input type="button" value="Edit" className="primary" onClick={handleEdit}/>
        <input type="button" value="Delete" className="del" onClick={deleteMovie}/>
        </div>
    );
    }

export default Movie;