const {Post} = require('../models/index');
var express = require('express');
var router = express.Router();

//LIST ALL 
exports.listAll = function (req, res, next) {

      
      if(req.session.loggedin)
      {
        
        Post.findAll().then( posts => { 
          
          res.render('index',{ 
          title: 'Etna Scope',
          data:posts,
          login:req.session.login
        });
      }) 
      }
      else {res.redirect('..')}
}
//GET ONE 
exports.findOne = function(req, res, next){
    Post.findAll( { where: { id : req.params.id }}).then( posts => { 
      res.render('test', { data:posts })
    })
  }

//CREATE 
exports.create = function(req, res, next){

    var pictureUrl = "https://auth.etna-alternance.net/api/users/" + req.body.pictureUrl + "/photo"

    Post.create({ 
      firstName : req.body.firstName ,
      lastName : req.body.lastName,
      pictureUrl : pictureUrl,
      service : req.body.service,
      phone : req.body.phone,
      mail : req.body.mail,
      hrNote : req.body.hrNote,
    }).then( posts => { 
      res.redirect('/');
    })
}
//UPDATE
exports.update = function(req, res, next){
    Post.update({ 
        firstName : req.body.firstName ,
        lastName : req.body.lastName,
        pictureUrl : req.body.pictureUrl,
         service : req.body.service,
          phone : req.body.phone,
          mail : req.body.mail,
          hrNote : req.body.hrNote, 
         },{
            where:{
              id : req.body.id 
             }
         }).then( posts =>{ 
            res.redirect('/');
            })
      }
//DELETE 
exports.delete = function(req,res,next){
        Post.destroy({
          where: {
            id: req.params.id
          }
        }).then( posts => { res.redirect('/');})
      }
