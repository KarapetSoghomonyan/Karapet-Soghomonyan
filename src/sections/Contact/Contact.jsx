import styles from './ContactStyles.module.css';
import emailjs from 'emailjs-com';
import { useRef } from 'react';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_xqos0vp',          // Service ID
        'template_pk7oxir',         // Template ID
        form.current,
        'JhJq-N1TbRAY4EL1-'         // Public Key
      )
      .then(
        (result) => {
          console.log('SUCCESS:', result.text);
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.error('FAILED:', error.text);
          alert('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form ref={form} onSubmit={sendEmail}>
        <div className="formGroup">
          <label htmlFor="name" hidden>Name</label>
          <input type="text" name="name" id="name" placeholder="Name" required />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>Email</label>
          <input type="email" name="email" id="email" placeholder="Email" required />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>Message</label>
          <textarea name="message" id="message" placeholder="Message" required></textarea>
        </div>
        <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;