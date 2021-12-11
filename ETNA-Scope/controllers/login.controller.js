var express = require('express');
var router = express.Router();
var request = require('request-promise');
var cookieJar = request.jar();
var request = require('request');
const { cookie } = require('request-promise');
const {User} = require('../models/index');
exports.checkEtnaLogin= function (req, res, next) {

    var password = req.body.password
    var login = req.body.login;
    var headerCookie,userId,userInfo,userFirstname,userLastname,userEmail,userLogin,userRole;
    var session = 0;
    var isCreatedValidator = false ;
    
    function isCreated(login) {
        
        User.findAll( { where: { login : login }}).then( user => { if(user.login==login){isCreatedValidator=true;}         
        })}
         isCreated(login);
        if (isCreatedValidator){console.log('existing user')}else{console.log('notDefined')}
    function getDataUser() {
        
        var options = {
        
          uri: 'https://auth.etna-alternance.net/identity',
          method: 'POST',
          json: {
            "login" : login,
            "password": password
          },
          jar: cookieJar,
        };
        
        request(options, function (error, response, body) {
          if (!error && response.statusCode == 200) {
      
            userId = body.id
      
            arr = JSON.stringify(cookieJar).split(":")
            tempo = JSON.stringify(arr[7]).split(",")
            tempo = tempo[0]
          
            tempo = tempo.replace('"', '').replace('"' , '').replace('"', '').replace('\\', '').replace('\\', '');
      
            headerCookie = 'authenticator=' + tempo
        
          }
        });
      
        setTimeout(getInfo,300);
      
        function getInfo() {
      
          //Debug
          //userId = 'carra_c'
      
          var options = {
            uri: 'https://auth.etna-alternance.net/api/users/' + userId,
            method: 'GET',
            host: 'auth.etna-alternance.net',
            headers: {
              "Cookie": headerCookie,
            }
          };
        
          request(options, function (error, response, body) {
            if (!error && response.statusCode == 200) {
      
              userInfo = JSON.parse(body)
      
              userFirstname = userInfo["firstname"]
      
              userLastname = userInfo["lastname"]
      
              userLogin = userInfo["login"]
      
              userEmail = userInfo["email"]
      
              userRole = userInfo["roles"].includes('adm');

                if (login == userLogin) { session=1;}
      
            } else { 
              console.log("Error:" + error)
              console.log("Body: " + body)
            }
          });
          }
          
          
          setTimeout(returnValue,500);
      
          function returnValue() {
            res.render('index',{ userFirstname: userFirstname, userLastname: userLastname,userLogin,userEmail: userEmail, userRole: userRole,session: session})
            // res.json("User firstname: " + userFirstname + ", lastname: " + userLastname + ", login: " + userLogin + ", email: " + userEmail + ", Is Admin: " + userRole + session)
          }
      }
    
      getDataUser()
}






