var React = require('react');
var DefaultLayout = require('./layouts/default');
 
function HelloMessage(props) {
  return (
    <DefaultLayout title={props.title}>
      <div>Hello {props.name}</div>
      <div>{props.data[1].lastName}</div>
      <div>
        { 
          props.data.map( function(data) {
           return <li>
              {data.lastName}
            </li>
          })
        }</div>
        <form method="POST" action="/">
          <input name="firstName" value="Kangourou" required />
          <input name="lastName" value="Jack" required />
          <input name="service" value="Boxeur" required/>
          <input name="pictureUrl" type="url" value="https://fr.web.img4.acsta.net/r_1280_720/medias/nmedia/18/35/09/91/p5.jpg" required/>
          <input name="mail" type="email" value="kangourou.jack@aymeric.com" required/>
          <input type="tel" pattern="[+]{1}[0-9]{2}[0-9]{9}" name="phone" value="0000000000" required/>
          <textarea name="hrNote" value="" required/>
          <button type="submit">button</button>
        </form>
    </DefaultLayout>
  );
}
 
module.exports = HelloMessage;