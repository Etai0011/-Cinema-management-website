const express = require('express')
const appRouter = express.Router()
const MovieBL = require('../models/MoviesBL')



appRouter.route('/').get(async(req,resp)=>{
    const Movies = await MovieBL.getAllMovies()
    return resp.json(Movies.data)
})


appRouter.route('/:id').get(async(req,resp)=>{
    const id = req.params.id
    const Movie = await MovieBL.getMovieById(id)
    return resp.json(Movie.data)
})

appRouter.route('/').post(async(req,resp)=>{
    const MovieObj = req.body;
    const Movie = await MovieBL.addMovie(MovieObj)
    return resp.json("The movie added")

})

appRouter.route('/:id').put(async(req, resp)=>{
    const id = req.params.id
    const MovieObj = req.body
    const result = await MovieBL.updateMovie(id,MovieObj)
    return resp.json(result.data)

})

appRouter.route('/:id').delete(async(req,resp)=>{
    const id = req.params.id
    MovieBL.deleteMovie(id)
    resp.json("deleted")
})



module.exports = appRouter