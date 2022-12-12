//credit https://javascript.plainenglish.io/how-to-build-a-contact-form-in-react-that-sends-emails-using-emailjs-70011d2563a3
import React, {useRef} from "react";
import emailjs from "emailjs-com";
import 'bootstrap/dist/css/bootstrap.min.css';
const SERVICE_ID = "default_service"
const TEMPLATE_ID = "contact_template";
const USER_ID = "yIYlKQuRfd4iacIRA";



const Contact = () => {
  const form = useRef();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log('Message Sent Successfully');
      },
      (error) => {
        console.log('Oops, something went wrong'); 
      });
      e.target.reset()
  };


return (
    <div className='Contact'>
      <form  ref={form} className='form' onSubmit={handleOnSubmit}>
        <div className="form-group">
          <label for="Email">Email    </label>
          <input type="email" className="form-input-control-email" id="user_email" name="user_email" placeholder="Enter email" required></input>
        </div>
        <div className="form-group">
          <label for="Name">Name</label>
          <input type="name" className="form-input-control" id="user_name" name="user_name" placeholder="Enter name" required></input>
        </div>
        <div className="form-group">
         <label for="message">Message</label>
        <textarea className="form-control" id="user_message" placeholder="Message" required></textarea>
        </div>
        <button type='submit' color='green'>Submit</button>
      </form>
    </div>
  )
}
export default Contact;





