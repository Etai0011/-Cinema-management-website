import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import Utils from '../Utils/SubscriptionsUtils'

const AddSubscription = () => {
    const [member,setMember]=useState({name:"", email:"", city:""})
    const history=useHistory()

    const save= async()=>{
        let ans=await Utils.addMember(member)
        alert(ans.data)
        history.push('/Main/subscriptions')
        }

    return (
         <div className="centerPage"> 
        <h3 className="fontStyle">Add new Member</h3>
        <b className="fontStyle">Name:</b>&nbsp;<input type="text" value={member.name} className="heighttextS" onChange={(e)=>setMember({...member,name:e.target.value})}/><br/><br/>
        <b className="fontStyle">Email:</b>&nbsp;<input type="text" value={member.email} className="heighttextS" onChange={(e)=>setMember({...member,email:e.target.value})}/> <br/><br/>
        <b className="fontStyle">City:</b>&nbsp; <input type="text" value={member.city} className="heighttextS" onChange={(e)=>setMember({...member,city:e.target.value})}/><br/><br/>
        <input type="button" value="Save" className="primary" onClick={save}/>
        <input type="button" value="Cancel" className="del" onClick={()=>history.push('/Main/subscriptions')}/>
        </div>
    );
};

export default AddSubscription;