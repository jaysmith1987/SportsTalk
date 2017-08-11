var express = require('express');
var app = express();
var port = process.env.PORT || 3001;
var mongoose = require('mongoose');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var db = require('./api/db');


app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());;
app.use(session({secret: 'sportsTalk'}));

app.use('/users', require('./api/controller/userController'))

db.connect('mongodb://localhost:27017/sportsdb', function(err){
    if(err){
        console.log('Unable to connect to Mongo.')
        process.exit(1)
    } else {
        app.listen(port, function(){
            console.log('Listening on port'+ port)
        })
    }
})

