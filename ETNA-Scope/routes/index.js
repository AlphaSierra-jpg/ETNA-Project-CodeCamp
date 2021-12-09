var express = require('express');
var router = express.Router();
const {Post} = require('../models/index');

router.get('/', function(req, res, next) {
  Post.findAll().then( posts => { 
    console.log(posts);
    
    res.render('index',{ 
    title: 'Bienvenue a la commu des includos',
    name: 'Zlatan', data:posts
  });


  })

});
module.exports = router;

