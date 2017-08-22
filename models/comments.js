var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentsSchema = new Schema({
    message:[{body:string, required: true }],
    author: [{type:Schema.ObjectId, ref: 'users'}],
})