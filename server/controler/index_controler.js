const user = require('../models/user_model')

const getIndex = async function(req, res){
    try {
        //get data from database
        const allUser = await user.find({})
        res.render('index', {user: allUser}) //send data to index page using user variable
    } catch (error) {
        res.status(500).json(error)
    }

}

module.exports = {
    getIndex
}