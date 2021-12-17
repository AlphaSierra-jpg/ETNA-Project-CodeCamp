var React = require('react');

function userList(props) {
    return ( <div>
        {props.data.map(((item) => (
        <div key={item.id} className="post">
          <h3>{item.login}</h3>
          <p>{item.isAdmin ? "User Admin " : "User Reader"}</p>
          <a href={"admin/"+item.id}>modify admin right</a>
          <a href={"admin/dl/"+item.id}>delete</a>
        </div>
      )))}
    </div>)       
}

module.exports = userList;