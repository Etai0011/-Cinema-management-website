import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import Utils from '../Utils/MoviesUtils'

const AddMovie = () => {
    const [movie,setMovie]=useState({name:"", genres:"", image:"", premiered:""})
    const history=useHistory()

    const save= async()=>{
            let ans=await Utils.addMovie(movie)
            alert(ans.data)
            history.push('/Main/movies')
    }

    return(
        <div className="centerPage">
                <b className="fontStyle">Name:</b> &nbsp;<input type="text" className="heighttextS" onChange={(e)=>setMovie({...movie,name:e.target.value})} /> <br/><br/>
                <b className="fontStyle">Genres:</b> &nbsp;<input type="text" className="heighttextS" onChange={(e)=>setMovie({...movie,genres:e.target.value})}/><br/><br/>
                <b className="fontStyle">image url:</b> &nbsp;<input type="text" className="heighttextS" onChange={(e)=>setMovie({...movie,image:e.target.value})}/> <br/><br/>
                <b className="fontStyle">Premired:</b> &nbsp; <input type="text" className="heighttextS" onChange={(e)=>setMovie({...movie,premiered:e.target.value})}/><br/><br/>
                <input type="button" value="Save" className="primary" onClick={save}/>
                <input type="button" value="Cancel" className="del" onClick={()=>history.push('/Main/movies')}/>
    </div>
    );
}
export default AddMovie;