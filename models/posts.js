var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
    title: String,
    author: [{type: Schema.ObjectId, ref: 'users'}],
    blog: [{ body: String, required: true}],
    category: [{String, required:true }],
    comments: [{type:Schema.ObjectId, ref:'comments'}],
    date: { type:Date, default: Date.now}
});

export default mongoose.model('posts', postSchema);