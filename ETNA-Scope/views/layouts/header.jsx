var React = require('react');
var Menu = require('../sorting/menu');
const session = require('express-session');
function Header(props) {
return (
    <header className="Header">
        <h1 className="title_header">ETNA-scope</h1>
        {/* this is the login connected by session */}
        <p className="marg_top">{props.login}</p>
        <form method="GET" action="/" className="marg_top"> 
            <label><span className="visually-hidden"></span></label>
            <input type="text" id="search" placeholder="Search for..." name="search"></input>
            <button type="submit">Search</button>
        </form>
        <Menu isAdmin = {props.isAdmin}/>
        

    </header>
);
}


module.exports = Header;
