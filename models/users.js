var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db = requie('../db')

function toLower (v){
    return v.toLowerCase();
}

function validator (v) {
    return v.length > 5 || v.length < 10;
};

var userSchema = new Schema({
    FirstName: { type: String,
                  required: true
    },
    LastName: { type: String,
                 required: true
    },
    email: { type: String,
             required: true,
             unique: true,
             set: toLower()
    },
    lastlogin: { type: Date,
            required:true
    },
    username: {
        type: String,
        required: true,
        unique: true
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
    posts: [{ type:Schema.ObjectId, ref: 'posts'}]
});

export default mongoose.model('users', userSchema);