var React = require('react');


function login(props) {
  return (

<div className="app">
    <form method="POST" action="/">
        <label for="login">Login :</label>
        <input type="text" className="input" name="login" placeholder="type your login" required></input> <br /> <br /> 
        <label for="password">Password :</label>
        <input type="password" className="input" name="password" placeholder="type your password" required></input> 
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

</div>

  );
}

module.exports = login;