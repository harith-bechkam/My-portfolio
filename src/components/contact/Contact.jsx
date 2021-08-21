import { useState } from "react";
import "./contact.scss";
import emailjs from "emailjs-com";

export default function Contact() {
  const [message, setMessage] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
      emailjs.sendForm('service_c1ry6t4', 'template_akcjv9h',e.target,'user_x6vZ225tUGpfyDlkYXOlu')
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
    
     setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <p>feel free to write e-mail</p>
        <form onSubmit={handleSubmit}>
          <input name="email" type="email" placeholder="Email" />
          <textarea name="message" placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
}
