var React = require('react');

const { get } = require('request');
function Trombi(props) {

  return (<div class="card">
    {props.data.map(((item) => (
      <div key={item.id} className="post">
        <h3>{item.lastName} - {item.id}</h3>
        <p>{item.firstName}</p>
        <img src={item.pictureUrl} alt='new' height={150} width={175} />
        <p>{item.mail}</p>
        <p>{item.phone}</p>
        {}
        {props.isAdmin ? <a href={"index/" + item.id}>modify </a> : <p></p>}
        {props.isAdmin ?  <a href={"index/dl/" + item.id}>delete</a>: <p></p>}
       
      </div>
    )))}

  </div>)

}

module.exports = Trombi;




