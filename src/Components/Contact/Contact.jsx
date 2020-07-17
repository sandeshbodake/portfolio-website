import React, { useState } from 'react';
import SocialLinks from '../SocialLinks';
import './Contact.css';

const Contact = props => {

  const [status, setFormStatus] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const elements = e.target.elements
    const templateId = 'portfolio';
    sendFeedback(templateId, {
      message_html: elements.message.value,
      from_name: elements.name.value,
      reply_to: elements.email.value
    })
    e.target.reset()
  }

  const sendFeedback = (templateId, variables) => {
    window.emailjs.send(
      'gmail', templateId,
      variables
      ).then(res => {
        setFormStatus(true)
      })
      .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }

  return (
    <section id="contact">
      <div className="container">
        <div className="heading-wrapper">
          <div className="heading">
            <p className="title">
              Want to <br />
              contact me?
            </p>
            <p className="separator" />
            <p className="subtitle">
              Please, use the form below or send an email
            </p>
          </div>
          <SocialLinks />
        </div>
        <form id="contact-form" 
          action="#"
          onSubmit={handleSubmit}
        >
          <input placeholder="Name" name="name" type="text" required />
          <input placeholder="Email" name="email" type="email" required />
          <textarea placeholder="Message" type="text" name="message" />
          <input className="button" id="submit" value="Submit" type="submit" />
        </form>
        { status && <p className="thanks-message"> Thanks I will reach out to you soon ;) </p> }
      </div>
    </section>
  );
};

export default Contact;
