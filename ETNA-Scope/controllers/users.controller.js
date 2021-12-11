
var express = require('express');
var router = express.Router();
var User = require('../models/user');

exports.findOne = function(req, res, next){
    console.log(req.body);
    User.findAll( { where: { login : req.login }}).then( user => { 
      console.log(user);
      res.send({ data:user })
    })
  }