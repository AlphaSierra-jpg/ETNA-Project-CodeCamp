var React = require('react');

const { get } = require('request');
function Trombi(props) {

    return ( <div class="card">
        {props.data.map(((item) => (
        <div key={item.id} className="post">
          <h3>{item.lastName} - {item.id}</h3>
          <p>{item.firstName}</p>
          
          <img src={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.20minutes.fr%2Fhigh-tech%2F2012251-20170210-troll-sommeille-chacun&psig=AOvVaw1lbvbxO81OJAybCDdZkTSp&ust=1639657821885000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKiNo8Ln5fQCFQAAAAAdAAAAABAD"} alt='new' height={150} width={200}/>
          <p>{item.mail}</p>
          <p>{item.phone}</p>
          <a href={"/"+item.id}>test </a>
          <a href={"index/dl/"+item.id}>delete</a>
        </div>
      )))}
    </div>)
        
}

module.exports = Trombi;




