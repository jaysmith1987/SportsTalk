"use strict"

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


function toLower (v){
    return v.toLowerCase();
}

function validator (v) {
    return v.length >= 5;
};

var userSchema = new Schema({
    email: { type: String,
             required: true,
             unique: true
    },

    username: {
        type: String,
        required: true,
        unique: true
    },

    lastlogin: {
         type: Date,
         default: Date.now,
    },
    
    password: {
        type: String,
        required: true,
        set: validator
    },
    followers: {
        type: Number,
        default: 0
    },
    posts: [{ type:Schema.ObjectId, ref: 'posts'}],
    comments: [{type:Schema.ObjectId, ref:'comments'}]
});


module.exports = mongoose.model('User', userSchema);