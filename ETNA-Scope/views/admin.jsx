var React = require('react');
var DefaultLayout = require('./layouts/default');
var ListAllUser = require('./admin/usersList')


function HelloMessage(props) {
  return (
    <DefaultLayout title={props.title}>
      <form method="POST" action="/logout"><button>LOGOUT</button></form>
        <ListAllUser data={props.data} />
    </DefaultLayout>
  );
}
 
module.exports = HelloMessage;