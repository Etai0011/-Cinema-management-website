import React,{useEffect, useState} from 'react';
import {useSelector} from 'react-redux'
import Utils from '../Utils/SubscriptionsUtils'
import Subscriptions from './Subscriptions';
import { GridList, GridListTile } from '@material-ui/core';

const MainSubscriptions = () => {
    const [members, setMembers]=useState([])
    const permissions=useSelector(state=>state.permissions)
    const isChange=useSelector(state=>state.changeMember)
    useEffect(async()=>{
        let ans=await Utils.getAllMembers()
        setMembers(ans.data)
    },[isChange])
    
    let view=<div></div>;
    if(permissions.includes("Admin") || permissions.includes("View Subscriptions")){
        view= <div>
            <br/>
            <GridList cols={4}>
             {members.map((member,index) => {
                return <GridListTile key={index} className="movieHeight" cols={index%2}>           
              <Subscriptions key={index} member={member} />
                </GridListTile>
            })}
            </GridList>
             </div>
    }
    else{
        alert("You do not have permission to do this, ask the administrator for permission")
    }
    return (
        <div>
        {view}
    </div>
    );
};

export default MainSubscriptions;