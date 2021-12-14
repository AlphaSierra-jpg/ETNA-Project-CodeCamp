var React = require('react');


function login(props) {
  return (


    <form method="POST" action="/">
        <input type="text" name="login" placeholder="type your login" required></input>
        <input type="password" name="password" placeholder="type your password" required></input>
        <button type="submit">Submit</button>
      </form>


  );
}
 
module.exports = login;