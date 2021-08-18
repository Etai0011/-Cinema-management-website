import React, {useEffect,useState} from 'react';
import {useHistory, useParams} from 'react-router-dom'
import Utils from '../Utils/SubscriptionsUtils'

const EditSubscription = () => {
    const [member,setMember]=useState({name:"", email:"", city:""})
    const history=useHistory()
    const {id} = useParams()

    useEffect(async()=>{
        let resp = await Utils.getMemberById(id) 
        setMember(resp.data)
    },[])
    const update=async()=>{
        let ans=await Utils.editMember(id,member)
        alert(ans.data)
        history.push('/Main/subscriptions')
    }

    return ( 
    <div className="centerPage"> <br/>
        <b className="fontStyle">Edit Member: </b><span className="fontStyle">{member.name}</span> <br/><br/>
        <b className="fontStyle">Name: </b>&nbsp;<input type="text" value={member.name} className="heighttextS" onChange={(e)=>setMember({...member,name:e.target.value})}/><br/><br/>
        <b className="fontStyle">Email: </b>&nbsp;<input type="text" value={member.email} className="heighttextS" onChange={(e)=>setMember({...member,email:e.target.value})}/> <br/><br/>
        <b className="fontStyle">City:</b> &nbsp; <input type="text" value={member.city} className="heighttextS" onChange={(e)=>setMember({...member,city:e.target.value})}/><br/><br/>
        <input type="button" value="Update" className="primary" onClick={update}/>
        <input type="button" value="Cancel" className="del" onClick={()=>history.push('/Main/subscriptions')}/>
       </div> 
    );
};

export default EditSubscription;