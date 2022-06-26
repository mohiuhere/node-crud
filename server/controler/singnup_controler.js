const getSignupForm = function(req, res){
    res.render('add_user')
}

const postSignupForm = function(req, res){
    res.send('post')
}

module.exports = {
    getSignupForm,
    postSignupForm
}