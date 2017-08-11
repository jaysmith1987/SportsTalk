var mongoose = require('mongoose');
var configDB = require('../config/database.js');

var state = {
    db: null
}

exports.connect = function(url, done){
    if(state.db) return done()


mongoose.connect(configDB.url , function (err, db){
    if (err) return done(err)
    state.db = db
    done()
}); 
}

exports.get = function (){
    return state.db
}

exports.close = function(done){
    if(state.db) {
        state.db.close(function(err, result){
         state.db = null
         statemode = null
         done(err)
        })
    }
}