const userModel = require('../models/user_model')
const getSignupForm = function(req, res){
    res.render('add_user')
}

const postSignupForm = async function(req, res){
    if(!req.body){
        res.status(400).send({ msg: 'cant post empty post'})
        return;
    }
    try {
        const user = await userModel.create(req.body)
        res.status(201).json({ user })
    } catch (error) {
        res.status(500).json(error)
    }

}

module.exports = {
    getSignupForm,
    postSignupForm
}