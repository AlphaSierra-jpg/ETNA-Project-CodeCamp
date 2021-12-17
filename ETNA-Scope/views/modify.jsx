var React = require('react');
var DefaultLayout = require('./layouts/default');
var Site = require('./trombi/fullSite')
var NewPost = require('./trombi/createNewPost');
var Header = require('./layouts/header');

function HelloMessage(props) {
  return (
    <DefaultLayout title={props.title}>
      <Header login={props.login} />
      <div className="creationForm2">
        <form method="POST" action="update" className="form2">
        <input type="hidden" name="id" value={props.modify[0].id} />  
        <label htmlFor="firstName">First Name</label>
        <input name="firstName" value={props.modify[0].firstName} required />
        <label htmlFor="lastName">Last Name</label>
        <input name="lastName" value={props.modify[0].lastName} required />
        <label htmlFor="service">Service</label>
        <select v-model="selected" name="service" defaultValue={props.modify[0].service}>
                <option value="test1">test1</option>
                <option value="test2">test2</option>
                <option value="test3">test3</option>
        </select>
        <label htmlFor="pictureUrl">Login</label>
        <input name="pictureUrl" type="text" value={props.modify[0].login} required />
        <label htmlFor="mail">Mail</label>
        <input name="mail" type="email" value={props.modify[0].mail} required />
        <label htmlFor="phone">Phone</label>
        <input type="tel" pattern="[+]{1}[0-9]{2}[0-9]{9}" name="phone" value={props.modify[0].phone} required />
        <label htmlFor="hrNote">Phone</label>
        <textarea name="hrNote" value={props.modify[0].hrNote}/>
        <button type="submit">button</button>
        </form>
         </div>
    </DefaultLayout>
  );
}

module.exports = HelloMessage;