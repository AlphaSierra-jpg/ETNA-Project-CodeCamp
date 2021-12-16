var React = require('react');

const { get } = require('request');
function Trombi(props) {

  return (<div class="card">
    {props.data.map(((item) => (
      <div key={item.id} className="post">
          <div className="show">
            <h3>{item.lastName} - {item.id}</h3>
            <p>{item.firstName}</p>
            <div className="img">
              <img src={item.pictureUrl} alt='new' height={150} width={175} />
            </div>
          </div>
          <div className="hide">
            <p>{item.mail}</p>
            <p>{item.phone}</p>
            <a href={"/" + item.id}>test </a>
            <a href={"index/dl/" + item.id}>delete</a>
          </div>
      </div>
    )))}

  </div>)

}

module.exports = Trombi;




