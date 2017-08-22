var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require('path');
var db = require('./models/db.js');
var Users = require('./models/users.js');
var Posts = require('/models/posts.js');
var Comments = require('/models/comments.js');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/sportsdb');

// var db = mongoose.connection;
db.on('error', console.error.bind(console, '#MongoDb - connection error: ' + err));

app.use(session({
    secret:'sportsTalk',
    saveUninitialized: false,
    resave: false,
    cookie: {maxAge: 1000 * 60 * 60 * 24 *2},
    store: new MongoStore({mongooseConnection: db, ttl: 2 * 24 * 60 * 60})
}))



app.post('/users', (req,res) =>{
    var user = req.body;

    Users.create(user, (err, users) => {
        if(err){
            throw err;
        }
        res.json(users);
    })
});

app.get('/users', (req,res) => {
    Users.find((err, users) => {
        if(err) {
            throw err;
        }
        res.json(users);
    })
});


app.post('/posts', (req,res) => {
    var post = req.body;

    Posts.create(post, (err, posts)=> {
        if(err){
            throw err;
        }
        res.json(posts);
    })
});

app.get('/posts', (req,res) => {
    Posts.find((err, posts)=> {
        if(err) {
            throw err;
        }
        res.json(posts);
    })
});

app.post('/comments', (req, res) => {
    var comment = req.body;

    Comments.create(comment, (err, comments) => {
        if(err){
            throw err;
        }
        res.json(comments);
    })
});

app.get('/comments', (req,res) => {
    Comments.find((err, comments)=> {
        if(err) {
            throw err;
        }
        res.json(comments);
    })
});

app.listen(3001, (err) => {
    if(err){
        return console.log(err);
    }
    console.log('API Server is running on port 3001');
});



