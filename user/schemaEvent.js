const mongoose = require('mongoose');
var eventSchema = new mongoose.Schema({///the type of elements
    username: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true,
    },
   location: {
        type: String,
        required: true
    },
    telephone: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    }
})
var Events = mongoose.model('event', eventSchema)
module.exports = Events;