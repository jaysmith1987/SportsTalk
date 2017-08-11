var express = require('express'),
    router = express.Router()

var db = require('../db')

router.get('/all', function(req,res){
    var collection = db.get().collection('../models/users.js')

    collection.find().toArray(function(err, docs) {
        res.render('../models/users.js', {users: docs})
    })
})

router.get('/recent', function (req,res) {
    var collection = db.get().collection('../models/users.js')

    collection.find().sort({'date': -1}).limit(100).toArray(function(err, docs){
      res.render('../models/users.js', {users: docs})  
    })
})

module.exports = router