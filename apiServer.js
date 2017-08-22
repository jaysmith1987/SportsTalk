var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());



//APIs
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/sports');

var db = mongoose.connection;
db.on('error', console.error.bind(console, '#MongoDb - conenction error: '));
//Sessions
app.use(session({
    secret: 'mySecretString',
    saveUninitialized: false,
    resave: false,
    cookie: {maxAge:1000 * 60 * 60 * 24 * 2},
    store: new MongoStore({mongooseConnection: db, ttl: 2 * 24 * 60 *60})
}))

//Save Session
app.post('/cart', function(req,res){
    var cart = req.body;
    req.session.cart = cart;
    req.session.save(function(err){
      if(err) {
          throw err;
      }  
      res.json(req.session.cart);
    })
})

//Get session cart api
app.get('/cart', function(req,res){
    if(typeof req.session.cart !== 'undefined'){
        res.json(req.session.cart);
    }
});
var Users = require('./models/users.js');

//Post Books
app.post('/users', function(req,res){
  var user = req.body;

  Users.create(user, function(err, users){
    if(err){
      throw err;
    }
    res.json(users);
  })
});

app.get('/users', function(req,res){
  Users.find(function(err, users){
    if(err) {
      throw err;
    }
    res.json(users)
  })
});

app.delete('/users/:_id', function(req,res){
  var query = {_id: req.params._id};

  Users.remove(query, function(err, users){
    if(err){
      throw err;
    }
    res.json(users);
  })
});

app.put('/users/:_id', function(req,res){
  var user = req.body
  var query = req.params._id;
  var update = {
    '$set': {
      email:user.email,
      username:user.username,
      lastlogin:user.lastlogin,
      password:user.password
    }
  };
  var options = {new: true};

  Users.findOneAndUpdate(query, update, options, function(err, users){
    if(err){
      throw err;
    }
    res.json(users);
  })
});

var Posts = require('./models/posts.js');

app.post('/posts', function(req,res){
  var post = req.body;

  Posts.create(post, function(err, posts){
    if(err){
      throw err;
    }
    res.json(posts);
  })
});

app.get('/posts', function(req,res){
  Posts.find(function(err, posts){
    if(err) {
      throw err;
    }
    res.json(posts)
  })
});

app.delete('/posts/:_id', function(req,res){
  var query = {_id: req.params._id};

  Posts.remove(query, function(err, posts){
    if(err){
      throw err;
    }
    res.json(posts);
  })
});

app.put('/posts/:_id', function(req,res){
  var post = req.body
  var query = req.params._id;
  var update = {
    '$set': {
      title:post.title,
      blog:post.blog,
      comments:post.comments
    }
  };
  var options = {new: true};

  Posts.findOneAndUpdate(query, update, options, function(err, posts){
    if(err){
      throw err;
    }
    res.json(posts);
  })
});

var Comments = require('./models/comments.js');

app.post('/comments', function(req,res){
  var comment = req.body;

  Comments.create(comment, function(err, comments){
    if(err){
      throw err;
    }
    res.json(comments);
  })
});

app.get('/comments', function(req,res){
  Comments.find(function(err, comments){
    if(err) {
      throw err;
    }
    res.json(comments)
  })
});

app.delete('/comments/:_id', function(req,res){
  var query = {_id: req.params._id};

  Comments.remove(query, function(err, comments){
    if(err){
      throw err;
    }
    res.json(comments);
  })
});

app.put('/comments/:_id', function(req,res){
  var comment = req.body
  var query = req.params._id;
  var update = {
    '$set': {
      message: comment.message
    }
  };
  var options = {new: true};

  Comments.findOneAndUpdate(query, update, options, function(err, comments){
    if(err){
      throw err;
    }
    res.json(comments);
  })
});

//Get Images
app.get('/images', function(req, res){
    const imgFolder = __dirname + '/public/images/';
    const fs = require('fs');
    fs.readdir(imgFolder, function(err, files){
        if(err){
            return console.error(err);
        }
        const filesArr = [];
        files.forEach(function(file){
            filesArr.push({name: file});
 })
  res.json(filesArr);
})
})

app.listen(3001, function (err) {
    if(err) {
        return console.log(err);
    }
    console.log('API Server is running on port 3001');
});