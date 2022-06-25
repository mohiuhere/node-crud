const mongoose = require('mongoose')

const connecDB = function(url){
    return mongoose.connect(url)
}

module.exports = connecDB