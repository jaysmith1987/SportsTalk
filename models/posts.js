"use strict"

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postsSchema = new Schema({
    title: String,
    author: [{type: Schema.ObjectId, ref: 'users'}],
    blog: String,
    category: String,
    comments: [{type:Schema.ObjectId, ref:'comments'}],
    date: { type:Date, default: Date.now}
});

var Posts = mongoose.model('Posts', postsSchema);
module.exports = Posts;