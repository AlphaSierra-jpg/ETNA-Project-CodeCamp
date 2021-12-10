var React = require('react');
var Trombi = require('./Trombi');
var CreateNewPost = require('./createNewPost');

function Site(props){ 
    return (
                <Trombi data={props.data}/>    
            )
}
module.exports = Site;