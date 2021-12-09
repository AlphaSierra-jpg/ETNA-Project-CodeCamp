var express = require('express');
var router = express.Router();
const {Post} = require('../models/index');

//Default views
router.get('/', function(req, res, next) {
  Post.findAll().then( posts => { 
    console.log(posts);
    
    res.render('index',{ 
    title: 'Bienvenue a la commu des includos',
    name: 'Zlatan', data:posts
  });
  })
});

//this route is use to create a new Post via POST method
router.post('/', function(req, res, next){

  Post.create({ 
    firstName : req.body.firstName ,
    lastName : req.body.lastName,
    pictureUrl : req.body.pictureUrl,
    service : req.body.service,
    phone : req.body.phone,
    mail : req.body.mail,
    hrNote : req.body.hrNote,
  }).then( posts => { 
    res.json({
      data:posts
    })
  })
})

module.exports = router;

