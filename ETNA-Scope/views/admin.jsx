var React = require('react');
var DefaultLayout = require('./layouts/default');
var ListAllUser = require('./admin/usersList')
var Header = require('./layouts/header')

function HelloMessage(props) {
  return (
    <DefaultLayout title={props.title}>
      <Header />
        <ListAllUser data={props.data} />
    </DefaultLayout>
  );
}

module.exports = HelloMessage;