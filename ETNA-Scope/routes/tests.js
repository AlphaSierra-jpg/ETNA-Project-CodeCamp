var express = require('express');
var router = express.Router();


// /* GET home page. */
router.get('/', function(req, res, next) {

  //return the index view and a table of datas
  res.render('index', 
  { 
    title: 'Bienvenue a la commu des includos',
    name: 'Zlatan',
  });
});
module.exports = router;
