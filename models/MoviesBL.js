const utils=require('../Utils/utils')

const getAllMovies = ()=> {
    return utils.getAll('http://localhost:8000/movies')
    }


    const getMovieById = (movieId)=> {
        return utils.getById(`http://localhost:8000/movies` , movieId)
        }

        const addMovie = (movie)=> {
            return utils.addItem('http://localhost:8000/movies', movie)
            }

            const updateMovie = (movieId, movie)=> {
                return utils.updateItem(`http://localhost:8000/movies`, movieId, movie)
                }


                const deleteMovie = (movieId)=> {
                    return utils.removeItem(`http://localhost:8000/movies`, movieId)
                    }

module.exports = {getAllMovies,getMovieById,addMovie,updateMovie,deleteMovie}