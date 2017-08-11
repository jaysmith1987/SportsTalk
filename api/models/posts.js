var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postSchema = new Schema({
    title: String,
    author: [{type: Schema.ObjectId, ref: 'user'}],
    body: String,
    category: String,
    comments: [{body: String, data: Date}],
    date: { type:Date, default: Date.now},
    meta: {likes: number
    }
});

export default mongoose.model('posts', postSchema);