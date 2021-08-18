import React,{useEffect} from 'react';
import { emphasize, withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import MovieIcon from '@material-ui/icons/Movie';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import {Switch, Route , useHistory} from 'react-router-dom';
import UsersMan from './UsersMan';
import {useSelector} from 'react-redux'
import MoviesManage from '../Movies Management/MoviesManage';
import SubscriptionsManage from '../Subscriptions Management/SubscriptionsManage'
import BuildIcon from '@material-ui/icons/Build';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import '../style.css';

const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[300],
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip); 

const MainPage = () => {
    const permissions= useSelector(state=>state.permissions)
    const sessionTimeOut=useSelector(state=>state.sessionTimeOut)
    const history = useHistory()

    useEffect(async()=>{
        await setTimeout(()=>{
            alert("timeout");
            history.push('/')
        },+sessionTimeOut*60000)
    })
    const showMovies =()=>{
        history.push('/Main/movies')
    }

    const showSubscriptions =()=>{
        history.push('/Main/subscriptions')
    }

    const showUsersMan =()=>{
        history.push('/Main/man')
    }

    const logout =()=>{
        history.push('/')
    }

    let adminBtn;
    if(permissions.includes("Admin")){
        adminBtn=<StyledBreadcrumb
                    component="a"
                    label="Users Management"
                    icon={<BuildIcon fontSize="small" />}
                    onClick={showUsersMan}
                />
    }

    return (
        <div>
            <div className="centerToolBar">
            <Breadcrumbs aria-label="breadcrumb">
                <StyledBreadcrumb
                    component="a"
                    label="Movies"
                    icon={<MovieIcon fontSize="small" />}
                    onClick={showMovies}
                />
                <StyledBreadcrumb
                    component="a"
                    label="Subscriptions"
                    icon={<SupervisorAccountIcon fontSize="small" />}
                    onClick={showSubscriptions}
                />
                {adminBtn}
                <StyledBreadcrumb
                    component="a"
                    label="Log out"
                    icon={<ExitToAppIcon fontSize="small" />}
                    onClick={logout}
                />
            </Breadcrumbs>
            </div>
            
            <br/><br/><br/>
            <Switch>
                <Route path='/Main/man' component={UsersMan}/>      
                <Route path='/Main/movies' component={MoviesManage} />
                <Route path='/Main/subscriptions' component={SubscriptionsManage} />
            </Switch>
        </div>
    );
};

export default MainPage;