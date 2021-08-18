const express = require('express')
const appRouter = express.Router()
const MovieBL = require('../models/MoviesBL')
const SubscriptionsBL = require('../models/SubscriptionsBL')



appRouter.route('/').get(async(req,resp)=>{
    const Movies = await MovieBL.getAllMovies()
    return resp.json(Movies)
})

appRouter.route('/:id').get(async(req,resp)=>{
    const id = req.params.id
    const Movie = await MovieBL.getMovieById(id)
    return resp.json(Movie)
})

appRouter.route('/').post(async(req,resp)=>{
    const MovieObj = req.body;
    const Movie = await MovieBL.addMovie(MovieObj)
    return resp.json(Movie)

})

appRouter.route('/:id').put(async(req, resp)=>{
    const id = req.params.id
    const MovieObj = req.body
    const result = await MovieBL.updateMovie(id,MovieObj)
    return resp.json(result)

})

appRouter.route('/:id').delete(async(req,resp)=>{
    const id = req.params.id
    const result = await MovieBL.deleteMovie(id)
    await SubscriptionsBL.deleteMoviesFromSubs(id)
    return resp.json(result)
})



module.exports = appRouter