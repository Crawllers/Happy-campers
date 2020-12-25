const mongoose = require('mongoose');
var userSchema = new mongoose.Schema({///the type of elements
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})
var User = mongoose.model('user', userSchema)
module.exports = User;