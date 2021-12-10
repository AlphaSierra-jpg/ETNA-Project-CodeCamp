var express = require('express');
var router = express.Router();
var login = require('../controllers/login.controller')

router.post('/',login.checkEtnaLogin );
  
module.exports = router;

  

