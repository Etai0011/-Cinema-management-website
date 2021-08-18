import React from 'react';
import AddUser from './AddUser';
import AllUsers from './AllUsers';
import EditUser from '../Users Management/EditUser'
import {Switch, Route,useHistory} from 'react-router-dom'
import { Button } from '@material-ui/core';
import { ButtonGroup } from '@material-ui/core';

const UsersMan = () => {
    const history=useHistory()
    return (
        
        <div> <br/>
            <h1 className="secondTitle">Users</h1>
            <div  className="centerItems">
                <ButtonGroup color="secondary">
                <Button onClick={()=>{history.push('/Main/man')}}>All Users </Button>
                <Button onClick={()=>{history.push('/Main/man/add')}}>Add User</Button>
                </ButtonGroup>
            </div>
            <Switch>
                <Route path='/Main/man' exact  component={AllUsers}/>      
                <Route path='/Main/man/add' component={AddUser} />
                <Route path='/Main/man/edit/:id' component={EditUser} />
            </Switch>
        </div>
    );
};

export default UsersMan;