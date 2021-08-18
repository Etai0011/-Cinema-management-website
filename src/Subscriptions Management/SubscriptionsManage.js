import React from 'react';
import {useHistory,Switch, Route} from 'react-router-dom'
import MainSubscriptions from './MainSubscriptions'
import addSubscription from './AddSubscription'
import editSubscription from './EditSubscription'
import MemberById from './MemberById'
import {useSelector} from 'react-redux'
import { Button } from '@material-ui/core';
import { ButtonGroup } from '@material-ui/core';


const SubscriptionsManage = () => {
    const permissions=useSelector(state=>state.permissions)
    const history=useHistory()
    const addMember=()=>{
        if(permissions.includes("Admin") || permissions.includes("Create Subscriptions")){
            history.push('/Main/subscriptions/add')
        }
        else{
            alert("You do not have permission to do this, ask the administrator for permission")
        }
    }
    return (
        <div> <br/> 
            <h1 className="secondTitle">Subscriptions</h1>
            <div className="centerItems">
            <ButtonGroup color="secondary">
            <Button onClick={()=>{history.push('/Main/subscriptions')}}>All Subscriptions</Button>
            <Button onClick={addMember}>Add Subscription </Button>
            </ButtonGroup>
            </div>
            <Switch>
                <Route path='/Main/subscriptions/add' component={addSubscription} />     
                <Route path='/Main/subscriptions/:id' exact component={MemberById}/> 
                <Route path='/Main/subscriptions/edit/:id' exact component={editSubscription}/>
                <Route path='/Main/subscriptions' exact component={MainSubscriptions}/>
            </Switch>        
        </div>
    );
};

export default SubscriptionsManage;