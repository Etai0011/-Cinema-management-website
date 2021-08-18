const Movie = require('./MoviesSCHEMA')
const fetch = require('node-fetch')

const getAllData = async () => {
    let data = await fetch("https://api.tvmaze.com/shows")
    if(data.ok) {
        let arrMovies = await data.json()
        for(let i=0; i< arrMovies.length;i++){
            await addMovie({
                name : arrMovies[i].name,
                genres: arrMovies[i].genres, 
                image: arrMovies[i].image.medium,
                premiered:arrMovies[i].premiered
            })
        }}}

const getAllMovies = ()=> {
    return new Promise((resolve, reject)=>{
        Movie.find({},(err, data)=>{
            if(err){
                reject(err)
            } 
            else{
                resolve(data)
            }
        })

    })
}

const getMovieById = (MovieId)=> {
    return new Promise((resolve, reject)=>{
        Movie.findById(MovieId,(err,data)=>{
            if(err){
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}



const addMovie = (newmovie)=> {
    return new Promise((resolve,reject)=> {
        const newMovie = new Movie({
            name : newmovie.name,
            genres: newmovie.genres, 
            image: newmovie.image,
            premiered:newmovie.premiered
        })
        newMovie.save((err)=>{
            if(err){
                reject(err)
            }
            else {
                resolve(newMovie)
            }
        })
    })
}


const updateMovie = (MovieId, updateMovie) => {
    return new Promise((resolve, reject)=>{
        Movie.findByIdAndUpdate(MovieId,{
            name : updateMovie.name,
            genres: updateMovie.genres, 
            image: updateMovie.image,
            premiered:updateMovie.premiered
        },(err)=>{
            if(err){
                reject(err)
            }
            else {
                resolve("Movie was updated!")
            }
        })

    })
}

const deleteMovie = (MovieId)=> {
    return new Promise((resolve,reject)=>{
        Movie.findByIdAndDelete(MovieId,(err)=>{
            if(err){
                reject(err)
            }
            else{
                resolve("Movie deleted!!!")
            }
        })
    })
}

module.exports = {getAllData,getAllMovies,getMovieById,addMovie,updateMovie,deleteMovie}