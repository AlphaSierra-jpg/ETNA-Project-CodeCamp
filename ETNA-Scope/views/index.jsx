var React = require('react');
var DefaultLayout = require('./layouts/default');
var Site = require('./trombi/fullSite')
var NewPost = require('./trombi/createNewPost');
var Header = require('./layouts/header')

function HelloMessage(props) {
  return (
    <DefaultLayout title={props.title}>
      <Header login={props.login}/>
      <Site data={props.data}/>
      <NewPost/>
      
    </DefaultLayout>
  );
}

module.exports = HelloMessage;