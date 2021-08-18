const utils=require('../Utils/utils')

    const getAllSubscriptions = ()=> {
        return utils.getAll('http://localhost:8000/subscriptions')
    }

    const getSubsByMovieId= (id)=>{
        return utils.getById(`http://localhost:8000/subscriptions/subMovies`, id)
    }


    const getSubscriptionById = (subscriptionId)=> {
        return utils.getById(`http://localhost:8000/subscriptions`, subscriptionId)
    }

    const addSubscription = (subscription)=> {
        return utils.addItem('http://localhost:8000/subscriptions', subscription)
    }


    const updateSubscription = (subscriptionId, subscription)=> {
        return utils.updateItem(`http://localhost:8000/subscriptions`, subscriptionId, subscription)
    }



    const deleteSubscription = (subscriptionId)=> {
        return utils.removeItem(`http://localhost:8000/subscriptions`,subscriptionId)
    }

module.exports = {getAllSubscriptions,getSubsByMovieId,getSubscriptionById,addSubscription,updateSubscription,deleteSubscription}