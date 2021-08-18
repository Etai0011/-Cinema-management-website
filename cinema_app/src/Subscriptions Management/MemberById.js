import React,{useEffect, useState} from 'react';
import Subscriptions from './Subscriptions'
import {useParams} from 'react-router-dom'
import {useDispatch} from 'react-redux';
import SubscriptionsUtils from '../Utils/SubscriptionsUtils'

const MemberById = () => {
    const[member,setMember]=useState({name:"", city:"", email:""})
    const dispatch=useDispatch()
    const {id} = useParams()

    useEffect(async()=>{
        let resp = await SubscriptionsUtils.getMemberById(id) 
        setMember(resp.data)
    },[])
    useEffect(()=>{
        let action={
            type:'ADDTOLIST',
            payload:member._id
        }
        dispatch(action)
    }, [member])
    return (
        <div className="centerPage"> <br/>
            <Subscriptions member={member} />
        </div>
    );
};

export default MemberById;