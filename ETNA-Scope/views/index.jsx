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

    </DefaultLayout>
  );
}
 
module.exports = HelloMessage;