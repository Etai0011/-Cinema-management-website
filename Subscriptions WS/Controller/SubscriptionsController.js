const express = require('express')
const appRouter = express.Router()
const SubscriptionBL = require('../models/SubscriptionsBL')



appRouter.route('/').get(async(req,resp)=>{
    const Subscriptions = await SubscriptionBL.getAllSubscriptions()
    return resp.json(Subscriptions)
})
appRouter.route('/subMovies/:id').get(async(req,resp)=>{
    const id = req.params.id
    const Subscription = await SubscriptionBL.getSubsByMovieId(id)
    return resp.json(Subscription)
})

appRouter.route('/:id').get(async(req,resp)=>{
    const id = req.params.id
    const Subscription = await SubscriptionBL.getSubsByMemberId(id)
    return resp.json(Subscription)
})

appRouter.route('/').post(async(req,resp)=>{
    const SubscriptionObj = req.body;
    const Subscription = await SubscriptionBL.addSubscription(SubscriptionObj)
    return resp.json(Subscription)

})

appRouter.route('/:id').put(async(req, resp)=>{
    const id = req.params.id
    const SubscriptionObj = req.body
    const result = await SubscriptionBL.updateSubscription(id,SubscriptionObj)
    return resp.json(result)

})

appRouter.route('/:id').delete(async(req,resp)=>{
    const id = req.params.id
    const result = await SubscriptionBL.deleteSubscription(id)
    return resp.json(result)
})



module.exports = appRouter