import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import Utils from '../Utils/UsersUtils'

const AddUser = () => {
    const [user,setUser]=useState({firstName:"", lastName:"", userName:"", sessionTimeOut:"", createDate:"", permissions:[]})
    const history=useHistory()

    const save = async ()=>{
        let ans= await Utils.addUser(user)
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
    } 
    setUser({...user,permissions:currPermission})
    }  
    else{
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
        <div className="centerPage"> 
             <h1 className="fontStyle">Add New User</h1><br/>
             <b className="fontStyle">First name:</b> <input type="text" className="heighttextS"  onChange={(e)=>setUser({...user,firstName:e.target.value})}/><br/><br/>
             <b className="fontStyle">Last name:</b> <input type="text" className="heighttextS" onChange={(e)=>setUser({...user,lastName:e.target.value})}/><br/><br/>
             <b className="fontStyle">User name:</b> <input type="text" className="heighttextS" onChange={(e)=>setUser({...user,userName:e.target.value})}/><br/><br/>
             <b className="fontStyle">Session time out (Minutes):</b> <input type="number" className="heighttextS" onChange={(e)=>setUser({...user,sessionTimeOut:e.target.value})}/><br/><br/>
             <b className="fontStyle">Permissions:</b> <br/>
            <input type="checkbox" value="View Subscriptions" onChange={setPermissions} checked={user.permissions.includes("View Subscriptions")}/> <span className="fontStyle">View Subscriptions</span> <br/>
            <input type="checkbox" value="Create Subscriptions" onChange={setPermissions} checked={user.permissions.includes("Create Subscriptions")}/> <span className="fontStyle">Create Subscriptions</span><br/>
            <input type="checkbox" value="Delete Subscriptions" onChange={setPermissions} checked={user.permissions.includes("Delete Subscriptions")}/> <span className="fontStyle">Delete Subscriptions</span><br/>
            <input type="checkbox" value="Update Subscriptions" onChange={setPermissions} checked={user.permissions.includes("Update Subscriptions")}/> <span className="fontStyle">Update Subscriptions</span><br/>
            <input type="checkbox" value="View Movies" onChange={setPermissions} checked={user.permissions.includes("View Movies")}/> <span className="fontStyle">View Movies</span><br/>
            <input type="checkbox" value="Create Movies" onChange={setPermissions} checked={user.permissions.includes("Create Movies")}/> <span className="fontStyle">Create Movies</span><br/>
            <input type="checkbox" value="Delete Movies" onChange={setPermissions} checked={user.permissions.includes("Delete Movies")}/> <span className="fontStyle">Delete Movies</span><br/>
            <input type="checkbox" value="Update Movies" onChange={setPermissions} checked={user.permissions.includes("Update Movies")}/> <span className="fontStyle">Update Movies</span><br/>
            <input type="button" value="Save" className="primary" onClick={save}/>
            <input type="button" value="Cancel" className="del" onClick={()=>history.push('/Main/man')}/>
        </div>
    );
};

export default AddUser;