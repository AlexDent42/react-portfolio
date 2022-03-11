import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jpsah4c', 'template_t3qf05f', form.current, 'E9VnCPxVSMnwvY8lp')};

  return (
   <section id="contact">
     <h5>Get in touch</h5>
     <h2> Contact me</h2>
     <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/> 
            <h4>E mail</h4>
            <h5>itsme@mymail.here</h5>
            <a href="mailto:itsme@mail.here" target='_blank'>Send a message </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/> 
            <h4>Messenger</h4>
            <h5>@facebookuser</h5>
            <a href="https://facebook.com" target='_blank'>Send a message </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/> 
            <h4>WhatsApp</h4>
            <h5>@whatappuser</h5>
            <a href="https://api.whatsapp.com/?message=+1244345" target="_blank">Send a message </a>
          </article>

        </div>
        {/* END OF CONTACT OPTION */}
        <form ref={form} onSubmit={sendEmail}> 
          <input type="text" placeholder='Your full name' name='name' required/>
          <input type="email" placeholder='Your email' name='email' required />
          <textarea name="message" rows="7" placeholder="Your message" required></textarea>
          <button className="btn btn-primary" type='submit'>Sent message</button>
        </form>
     </div>
   </section>
  )
}

export default Contact