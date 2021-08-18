import React,{useEffect,useState} from 'react'; 
import {useParams, useHistory} from 'react-router-dom';
import Utils from '../Utils/UsersUtils'

const EditUser = () => {
    const [user,setUser]=useState({firstName:"", lastName:"", userName:"", sessionTimeOut:"", createDate:"", permissions:[]})
    const history=useHistory()
    const {id} = useParams()
    useEffect(async()=>{
        let resp = await Utils.getUserById(id) 
        setUser(resp.data)
    },[])
    const update=async()=>{
        let ans=await Utils.updateUser(id,user)
        alert(ans.data)
        history.push('/Main/man')
    }
    const setPermissions=(e)=>{
        if(e.target.checked){
            const currPermission= [...user.permissions]
            currPermission.push(e.target.value)
            if (e.target.value=="Create Subscriptions" ||  e.target.value=="Delete Subscriptions"  ||  e.target.value=="Update Subscriptions"){
                if (! currPermission.includes("View Subscriptions")){
                    currPermission.push("View Subscriptions")
                } 
            } else if(e.target.value=="Create Movies" || e.target.value=="Delete Movies" || e.target.value=="Update Movies"){
                if (! currPermission.includes("View Movies")){
                    currPermission.push("View Movies")
        }
    } setUser({...user,permissions:currPermission})
}   else{
    let currPermission= [...user.permissions] 
    if(e.target.value=="View Subscriptions"){
        currPermission=currPermission.filter((permission) =>
            permission!="Create Subscriptions"&&permission!="Update Subscriptions"&&permission!="Delete Subscriptions" 
        )
    } 
    else if (e.target.value=="View Movies"){
            currPermission=currPermission.filter((permission) =>
                permission!="Create Movies"&&permission!="Delete Movies"&&permission!="Update Movies" 
            )
    }
    let index=currPermission.findIndex(perm=> perm===e.target.value)
    currPermission.splice(index,1)
    setUser({...user, permissions:currPermission})
}
}
    return ( 
        <div className="centerPage">  <br/>
            <b className="fontStyle">Edit user: </b>&nbsp; <span className="fontStyle">{user.firstName} {user.lastName}</span> <br/><br/>
            <b className="fontStyle">First name:</b>&nbsp; <input type="text" className="heighttextS" value={user.firstName} onChange={(e)=>setUser({...user,firstName:e.target.value})}/> <br/><br/>
            <b className="fontStyle">Last name: </b>&nbsp;<input type="text" className="heighttextS" value={user.lastName} onChange={(e)=>setUser({...user,lastName:e.target.value})}/> <br/><br/>
            <b className="fontStyle">User name:</b>&nbsp; <input type="text" className="heighttextS" value={user.userName} onChange={(e)=>setUser({...user,userName:e.target.value})}/><br/><br/>
            <b className="fontStyle">Session time out (Minutes): </b>&nbsp;<input type="number" className="heighttextS" value={user.sessionTimeOut} onChange={(e)=>setUser({...user,sessionTimeOut:e.target.value})}/> <br/><br/>
            <b className="fontStyle">Created data: </b><span className="fontStyle">{user.createDate}</span>  <br/> <br/>
            <b className="fontStyle">Permissions:</b> <br/>
            <input type="checkbox" value="View Subscriptions" className="fontStyle" onChange={setPermissions} checked={user.permissions.includes("View Subscriptions")}/> <span className="fontStyle" >View Subscriptions</span>  <br/>
            <input type="checkbox" value="Create Subscriptions" className="fontStyle" onChange={setPermissions} checked={user.permissions.includes("Create Subscriptions")}/> <span className="fontStyle">Create Subscriptions</span> <br/>
            <input type="checkbox" value="Delete Subscriptions" className="fontStyle" onChange={setPermissions} checked={user.permissions.includes("Delete Subscriptions")}/> <span className="fontStyle">Delete Subscriptions</span><br/>
            <input type="checkbox" value="Update Subscriptions" className="fontStyle" onChange={setPermissions} checked={user.permissions.includes("Update Subscriptions")}/><span className="fontStyle">Update Subscriptions</span> <br/>
            <input type="checkbox" value="View Movies" className="fontStyle" onChange={setPermissions} checked={user.permissions.includes("View Movies")}/> <span className="fontStyle">View Movies</span> <br/>
            <input type="checkbox" value="Create Movies" className="fontStyle" onChange={setPermissions} checked={user.permissions.includes("Create Movies")}/> <span className="fontStyle">Create Movies</span><br/>
            <input type="checkbox" value="Delete Movies" className="fontStyle" onChange={setPermissions} checked={user.permissions.includes("Delete Movies")}/><span className="fontStyle">Delete Movies</span> <br/>
            <input type="checkbox" value="Update Movies" className="fontStyle" onChange={setPermissions} checked={user.permissions.includes("Update Movies")}/> <span className="fontStyle">Update Movies</span><br/>
            <input type="button" value="Update" className="primary" onClick={update}/>
            <input type="button" value="Cancel" className="del" onClick={()=>{history.push('/Main/man')}}/>
        </div>
    );
};

export default EditUser;