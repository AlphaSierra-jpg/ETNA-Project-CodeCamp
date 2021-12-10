var React = require('react');


function login(props) {
  return (


    <form method="POST" action="/login">
        <input type="text" name="login" placeholder="type your login"></input>
        <input type="password" name="password" placeholder="type your password"></input>
        <button type="submit">Submit</button>
      </form>


  );
}
 
module.exports = login;