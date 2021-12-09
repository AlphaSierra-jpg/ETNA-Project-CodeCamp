var express = require('express');
var router = express.Router();
var XMLHttpRequest = require('xhr2');


/* GET users listing. */
router.get('/', function(req, res, next) {
  
    var url = "https://auth.etna-alternance.net/identity";

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.responseText);
        console.log(xhr.getResponseHeader('Set-Cookie'));
    }};

    var data = `{
        "login" : "",
        "password" : "pwd"
    }`;

    var tempo = xhr.getResponseHeader('Set-Cookie');

    xhr.send(data);
    res.cookie('cookie', 1);
    res.json({data:0})

});

module.exports = router;
