import React from 'react';
import {useHistory} from 'react-router-dom'
import Utils from '../Utils/UsersUtils'
import {useDispatch} from 'react-redux'


const User = (props) => {
    const history=useHistory()
    const dispatch=useDispatch()

    const deleteUser = async () =>{
        let ans=await Utils.deleteUser(props.user.id)
        alert(ans.data)
        let action={
            type:'DELETEUSER',
            payload:props.user.id
        }
        dispatch(action)
    }

    return (
        <div> 
    <b className="fontStyleMovies">Full name: </b> <span className="fontStyleMovies">{props.user.firstName}</span> {props.user.lastName} <br/>
    <b className="fontStyleMovies">UserName: </b> <span className="fontStyleMovies">{props.user.userName}</span> <br/>
    <b className="fontStyleMovies">Session time out: </b>  <span className="fontStyleMovies">{props.user.sessionTimeOut}</span> <br/>
    <b className="fontStyleMovies">Created Data: </b> <span className="fontStyleMovies">{new Date(props.user.createDate).toLocaleDateString().slice(0,10)}</span> <br/>
    <b className="fontStyleMovies">Permissions: </b> <ul> 
        {props.user.permissions.map((permission, index) =>{
            return <li className="fontStyleMovies" key={index}> {permission}</li>
        })}
        </ul> <br/>
    <input type="button" value="Edit" className="primary" onClick={()=>{history.push(`/Main/man/edit/${props.user.id}`)}} />
    <input type="button" value="Delete" className="del" onClick={deleteUser}/>
        </div>
    );
};

export default User;