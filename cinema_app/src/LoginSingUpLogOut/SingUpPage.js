import axios from 'axios';
import React,{useState} from 'react';
import Utils from '../Utils/UsersUtils'
import {useHistory} from 'react-router-dom'
import '../style.css'


const SingUpPage = () => {
    const [user,setUser] = useState({userName:"", password:""})
    const history= useHistory()
    const validation =async (e) =>{
        e.preventDefault()
        let ans= await Utils.checkSignup(user)
        if(ans.data!="The password has to be at least 4 characters" && ans.data!="User doesnt exist at the system"){
            alert(ans.data)
            history.push('/')
        }
        else {
            alert(ans.data)
        }
    }
    return (
        <div className="logInput">
        <form onSubmit={validation}>
            <h1 className="secondTitle">Create an Account</h1> <br/>
            <span className="fontStyle">User name: </span> <input type="text" className="heighttext" onChange={e=>setUser({...user,userName:e.target.value})}/> <br/> <br />
            <span className="fontStyle">Password: </span> &nbsp; <input type="password" className="heighttext" onChange={e=>setUser({...user,password:e.target.value})}/> <br/> <br/>
            <div className="centerItems"> 
            <input type="submit" value="Create Account" className="button"/> 
            </div>
        </form>
        </div>
    );
};

export default SingUpPage;