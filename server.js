var passport = require('passport');
var express = require('express');
var app = express();
var port = process.env.PORT || 4000;
var mongoose = require('mongoose');
var passoport = require('passport');
var flash = require('connect-flash');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var configDB = require('./config/database.js');

mongoose.connect(configDB.url); 

require('./config/passport')(passport);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());;
app.use(session({secret: 'sportsTalk'}));

app.use(passport.initialize());
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.listen(port);

console.log('Application is running on ' + port);

