import React from 'react';
import {useHistory,Switch, Route} from 'react-router-dom'
import MainMovies from './MainMovies';
import AddMovie from './AddMovie'
import MoviesEdit from './MoviesEdit';
import MovieByID from './MovieByID'
import {useSelector} from 'react-redux';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const MoviesManage = () => {
const permissions=useSelector(state=>state.permissions)
const history=useHistory()

const addMovie=()=>{
    if(permissions.includes("Admin") || permissions.includes("Create Movies")){
       history.push('/Main/movies/add')
    }
    else{
        alert("You do not have permission to do this, ask the administrator for permission")
    }
}
    return (
        <div> <br/> 
            <h1 className="secondTitle">Movies</h1>
            <div className="centerItems">
                <ButtonGroup color="secondary">
                    <Button onClick={()=>{history.push('/Main/movies')}}>All Movies</Button>
                    <Button onClick={addMovie}>Add Movie</Button>
                </ButtonGroup>
            </div>
            <br />
            <Switch>
                <Route path='/Main/movies/add' component={AddMovie}/>
                <Route path='/Main/movies/:id/edit' component={MoviesEdit}/>
                <Route path='/Main/movies/:id' component={MovieByID}/>
                <Route path='/Main/movies' component={MainMovies}/>
            </Switch>
        </div>
    );
};

export default MoviesManage;