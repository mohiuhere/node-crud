const signupRouter = require('express').Router()
const {getSignupForm,
    postSignupForm} = require('../controler/singnup_controler')

signupRouter.get('/signup', getSignupForm)

signupRouter.post('/signup', postSignupForm)

module.exports = signupRouter