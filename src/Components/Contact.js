import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import styles from './Contact.module.css';

function Contact() {
  const contactRef = useRef(null);
  const contactVisible = useIntersectionObserver(contactRef, { threshold: 0.1 });
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3x9r4zp', 'template_lz7tbjh', e.target, 'J_4jG-RHXwVe-9kPC')
      .then((result) => {
        console.log(result.text);
        setStatus('SUCCESS');
        e.target.reset();
      }, (error) => {
        console.log(error.text);
        setStatus('FAILED');
      });
  };

  return (
    <div className={`${styles.contact} ${contactVisible ? styles.fadeIn : ''}`} ref={contactRef}>
      <h2>Contact Me</h2>
      {status === 'SUCCESS' && <p className={styles.success}>Your message has been sent successfully!</p>}
      {status === 'FAILED' && <p className={styles.error}>Failed to send your message. Please try again later.</p>}
      <form className={styles.contactForm} onSubmit={sendEmail}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="subject">Subject:</label>
          <input type="text" id="subject" name="subject" required />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
