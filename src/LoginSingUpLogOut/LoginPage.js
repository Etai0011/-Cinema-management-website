import React, {useState}  from 'react';
import {Link, useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import Utils from '../Utils/UsersUtils'
import '../style.css'

const LoginPage = () => {
    const dispatch=useDispatch()
    const [user,setUser] = useState({userName:"", password:""})
    const history= useHistory()
    const validation = async() =>{
        let ans= await Utils.checkLogin(user)
        if(ans.data!="Please try again" && ans.data!="User doesnt exist"){
            let user=await Utils.getUserById(ans.data)
            let action={
                type:'SETPERMTIME',
                payload:user.data
            }
            dispatch(action) 
            localStorage.setItem("id", ans.data)
            history.push('/Main')
        }
        else{
            alert(ans.data)
        }
    }
    return (
        <div className="logInput">
            <h1 className="secondTitle">LOGIN</h1> <br/>
            <span className="fontStyle">User name: </span> <input type="text" className="heighttext" onChange={e=>setUser({...user,userName:e.target.value})}/> <br/> <br />
            <span className="fontStyle">Password: </span> &nbsp; <input type="password" className="heighttext" onChange={e=>setUser({...user,password:e.target.value})}/> <br/> <br />
            <div className="centerItems">
                <input type="button" value="Login" className="button" onClick={validation}/> <br/> <br/>
            </div> <br/>
            New user? : <Link to="/create"> Create Account </Link>  
        </div>
    );
};

export default LoginPage;