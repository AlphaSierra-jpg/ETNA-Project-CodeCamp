var React = require('react');

function Header(props) {
return (
    <header className="Header">
        <form method="POST" action="/logout"><button>LOGOUT</button></form>
        <form method="GET" action="/"> 
            <label><span className="visually-hidden"></span></label>
            <input type="text" id="search" placeholder="Search for..." name="search"></input>
            <button type="submit">Search</button>
        </form>
    </header>
);
}


module.exports = Header;
