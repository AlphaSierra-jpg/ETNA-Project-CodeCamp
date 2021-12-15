var React = require('react');
const session = require('express-session');
function Header(props) {
return (
    <header className="Header">
        <h1 className="title_header">ETNA-scope</h1>
        <p></p>
        <form method="GET" action="/"> 
            <label><span className="visually-hidden"></span></label>
            <input type="text" id="search" placeholder="Search for..." name="search"></input>
            <button type="submit">Search</button>
        </form>
        <form method="POST" action="/logout"><button className="logoutbtn">LOGOUT</button></form>
        

    </header>
);
}


module.exports = Header;
