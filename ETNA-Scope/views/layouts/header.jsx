var React = require('react');
const session = require('express-session');
function Header(props) {
return (
    <header className="Header">
        <h1 className="title_header">ETNA-scope</h1>
        {/* this is the login connected by session */}
        <p>{props.login}</p>
        <form method="GET" action="/"> 
            <label><span className="visually-hidden"></span></label>
            <input type="text" id="search" placeholder="Search for..." name="search"></input>
            <button type="submit">Search</button>
        </form>
        <form method="POST" action="/logout"><button className="logoutbtn">LOGOUT</button></form>
        
        {props.isAdmin ? <button className="createNewPost">+</button> : <p></p>}

    </header>
);
}


module.exports = Header;
