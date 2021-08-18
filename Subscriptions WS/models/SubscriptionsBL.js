const Subscription = require('./SubscriptionsSCHEMA')

const getAllSubscriptions = ()=> {

    return new Promise((resolve, reject)=>{
        Subscription.find({},(err, data)=>{
            if(err){
                reject(err)
            } 
            else{
                resolve(data)
            }
        })

    })
}

const getSubsByMovieId= (movieId)=>{
    return new Promise((resolve, reject)=>{
        Subscription.find({"movies.movieId":movieId},(err, data)=>{
            if(err){
                reject(err)
            } 
            else{
                data = data.length==0?"None":data;
                resolve(data)
            }
        })

    })
}
const getSubsByMemberId= (memberId)=>{
    return new Promise((resolve, reject)=>{
        Subscription.find({"memberId":memberId},(err, data)=>{
            if(err){
                reject(err)
            } 
            else{
                data = data.length==0?"notWatchedYet":data[0];
                resolve(data)
            }
        })

    })
}


const getSubscriptionById = (SubscriptionId)=> {
    return new Promise((resolve, reject)=>{
        Subscription.findById(SubscriptionId,(err,data)=>{
            if(err){
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}



const addSubscription = (subscription)=> {
    return new Promise((resolve,reject)=> {
        const newSubscription = new Subscription({
            memberId: subscription.memberId,
            movies: subscription.movies
        })
        newSubscription.save((err)=>{
            if(err){
                reject(err)
            }
            else {
                resolve(newSubscription)
            }
        })
    })
}


const updateSubscription = (SubscriptionId, updatedSubscription) => {
    return new Promise((resolve, reject)=>{
        Subscription.findByIdAndUpdate(SubscriptionId,{
            memberId: updatedSubscription.memberId,
            movies: updatedSubscription.movies
        },(err)=>{
            if(err){
                reject(err)
            }
            else {
                resolve("Subscription was updated!")
            }
        })

    })
}

const deleteSubscription = (SubscriptionId)=> {
    return new Promise((resolve,reject)=>{
        Subscription.findByIdAndDelete(SubscriptionId,(err)=>{
            if(err){
                reject(err)
            }
            else{
                resolve("Subscription deleted!!!")
            }
        })
    })
}


const deleteMoviesFromSubs=(movieId)=>{
    return new Promise((resolve,reject)=>{
        Subscription.find({"movies.movieId":movieId},(err,data)=>{
            if(err){
                reject(err)
            }
            else{
                data.forEach((sub)=>{
                    let movieIndex=sub.movies.indexOf(movie=> movie.movieId==movieId)
                    sub.movies.splice(movieIndex,1)
                    sub.save((err)=>{
                        if(err){
                            reject(err)
                        }
                    }) 
            
                }
                )
                resolve("All subscriptions were updated")
            }})}) }

module.exports = {getAllSubscriptions,getSubscriptionById,getSubsByMovieId,addSubscription,updateSubscription,deleteSubscription,deleteMoviesFromSubs,getSubsByMemberId}