var express = require('express');
var router = express.Router();
const {Post} = require('../models/index');

//GET ALL POSTS
router.get('/', function(req, res, next) {
  if(req.session.isAdmin && req.session.loggedin) {
    res.json('tu es admin toi ?? ');
  }else{
    res.redirect('..');
  }
});

module.exports = router;