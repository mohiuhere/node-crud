const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, 'must provide name'],
        trim: true,
        maxlength: [20,'mane cant be more then 20 char']
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    post: {
        type: String,
        trim: true,
        maxlength: [1000,'mane cant be more then 1000 char']
    }
})


module.exports = mongoose.model('User', userSchema)