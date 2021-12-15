var React = require('react');
var DefaultLayout = require('./layouts/default');
var Site = require('./trombi/fullSite')
var NewPost = require('./trombi/createNewPost');


function HelloMessage(props) {
  return (
    <DefaultLayout title={props.title}>
      <Site data={props.data}/>
      <NewPost/>
      
    </DefaultLayout>
  );
}

module.exports = HelloMessage;