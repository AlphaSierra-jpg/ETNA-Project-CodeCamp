var React = require('react');

function CreateNewPost(){

    return (
    <form method="POST" action="/index/create">
    <input name="firstName" placeholder="First Name" value="Include" required />
    <input name="lastName" placeholder="Last name" value="Charles" required />
    <input name="service" value="Boxeur" required/>
    <input name="pictureUrl" type="url" value="https://fr.web.img4.acsta.net/r_1280_720/medias/nmedia/18/35/09/91/p5.jpg" required/>
    <input name="mail" type="email" value="kangourou.jack@aymeric.com" required/>
    <input type="tel" pattern="[+]{1}[0-9]{2}[0-9]{9}" name="phone" value="+33635344768" required/>
    <textarea name="hrNote" value="" required/>
    <button type="submit">button</button>
    </form>)

}
module.exports = CreateNewPost;