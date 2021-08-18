import React from 'react';
import {useHistory} from 'react-router-dom'
import Utils from '../Utils/SubscriptionsUtils'
import {useDispatch,useSelector} from 'react-redux'
import MoviesWatched from './MoviesWatched'


const Subscriptions = (props) => {
    const permissions=useSelector(state=>state.permissions)
    const history= useHistory()
    const dispatch=useDispatch()

    const deleteMember= async()=>{
        if(permissions.includes("Admin") || permissions.includes("Delete Subscriptions")){
        let ans=await Utils.deleteMember(props.member._id)
        alert(ans.data)
        let action={
            type:'DELETEMEMBER',
            payload:props.member._id
        }
        dispatch(action)
    }
    else{
        alert("You do not have permission to do this, ask the administrator for permission")
    }
    }
    const editMovie=()=>{
        if(permissions.includes("Admin") || permissions.includes("Update Subscriptions")){
            history.push(`/Main/subscriptions/edit/${props.member._id}`)
        }
        else{
            alert("You do not have permission to do this, ask the administrator for permission")
        }

    }
    
    return ( 
        <div>
           <b className="fontStyleMovies">Name: </b> <span className="fontStyleMovies">{props.member.name} </span><br/>
           <b className="fontStyleMovies">Email: </b> <span className="fontStyleMovies">{props.member.email} </span> <br/>
           <b className="fontStyleMovies">City: </b> <span className="fontStyleMovies">{props.member.city} </span> <br/>
        <input type="button" value="Edit" className="primary" onClick={editMovie}/>
        <input type="button" value="Delete" className="del" onClick={deleteMember}/>
        <MoviesWatched id={props.member._id}/>
        </div>
    );
}

export default Subscriptions;