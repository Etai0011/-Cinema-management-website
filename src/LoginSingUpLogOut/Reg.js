import React from 'react';
import {Switch, Route} from 'react-router-dom'
import SingUpPage from './SingUpPage'
import LoginPage from './LoginPage'
import MainPage from '../Users Management/MainPage';
import UsersMan from '../Users Management/UsersMan'
import MoviesManage from '../Movies Management/MoviesManage'
import '../style.css'

const Reg = () => {
    return (
        <div className="logBackGround">
            <h1 className="titleStyle"> Movies- Subscriptions WebSite</h1> <br/><br/>
            <Switch>
                <Route path='/' exact component={LoginPage}/>    
                <Route path='/create' component={SingUpPage}/>    
                <Route path='/Main' component={MainPage} />
            </Switch>
        </div>
    );
};

export default Reg;