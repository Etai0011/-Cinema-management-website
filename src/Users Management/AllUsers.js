import React,{useEffect,useState} from 'react'; 
import Utils from '../Utils/UsersUtils'
import User from './User';
import {useSelector} from 'react-redux';
import { GridList, GridListTile } from '@material-ui/core';

const AllUsers = () => {
    let isChange= useSelector(state=>state.changeData)
    const [users, setUsers] = useState([])

    useEffect(async()=>{
        let resp = await Utils.getAllUsers()
        setUsers(resp.data)
    },[isChange])

    let items = <GridList cols={4}>
     {users.map((user,index)=>{
       return <GridListTile key={index} className="perHeight" cols={index%2}>           
        <User key={index} user={user}/>
       </GridListTile>
     
})}
        </GridList>
    return (
        <div>
            {items}
        </div>
    );
}

export default AllUsers;

