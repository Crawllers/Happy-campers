const mongoose = require('mongoose');
var postSchema = new mongoose.Schema({///the type of elements
    username: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true,
    },
    imgUrl: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default:Date.now,
        required: true

    },
    text: {
        type: String,
        required: true
    }

})
var Posts = mongoose.model('post', postSchema)
module.exports = Posts;