"use strict"

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentsSchema = new Schema({
    message:String,
    author: [{type:Schema.ObjectId, ref: 'users'}],
})

var Comments = mongoose.model('Comments', commentsSchema);
module.exports = Comments;