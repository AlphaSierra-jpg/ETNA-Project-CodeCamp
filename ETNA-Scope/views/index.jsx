var React = require('react');
var DefaultLayout = require('./layouts/default');
var Site = require('./trombi/fullSite')



function HelloMessage(props) {
  return (
    <DefaultLayout title={props.title}>
      <Site data={props.data}/>
      <form method="POST" action="/logout"><button>LOGOUT</button></form>
    </DefaultLayout>
  );
}
 
module.exports = HelloMessage;