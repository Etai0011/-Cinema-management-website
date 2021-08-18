const express = require('express')
const appRouter = express.Router()
const SubscriptionBL = require('../models/SubscriptionsBL')



appRouter.route('/').get(async(req,resp)=>{
    const Subscriptions = await SubscriptionBL.getAllSubscriptions()
    return resp.json(Subscriptions.data)
})

appRouter.route('/subMovies/:id').get(async(req,resp)=>{
    const id = req.params.id
    const Subscription = await SubscriptionBL.getSubsByMovieId(id)
    return resp.json(Subscription.data)
})


appRouter.route('/:id').get(async(req,resp)=>{
    const id = req.params.id
    const Subscription = await SubscriptionBL.getSubscriptionById(id)
    return resp.json(Subscription.data)
})

appRouter.route('/').post(async(req,resp)=>{
    const SubscriptionObj = req.body;
    const Subscription = await SubscriptionBL.addSubscription(SubscriptionObj)
    return resp.json(Subscription.data)

})

appRouter.route('/:id').put(async(req, resp)=>{
    const id = req.params.id
    const SubscriptionObj = req.body
    const result = await SubscriptionBL.updateSubscription(id,SubscriptionObj)
    return resp.json(result.data)
})

appRouter.route('/:id').delete(async(req,resp)=>{
    const id = req.params.id
    SubscriptionBL.deleteSubscription(id)
    resp.json("Subscription Deleted!!")
})



module.exports = appRouter