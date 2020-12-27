const mongoose = require('mongoose');
var eventSchema = new mongoose.Schema({///the type of elements
    username: {
        type: String,
        required: true
    },
    useremail: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    location: {
        type: String,
    },
    telephone: {
        type: String,
        required: true
    },
    date: {
        type: String,
    },
    imgUrl: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    joinEvent:{
        type: String,
        default: ''
    }
})
var Events = mongoose.model('event', eventSchema)
module.exports = Events;