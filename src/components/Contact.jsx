import React, { useState, useEffect } from 'react';
import '../styles/global.css'; // Import any shared CSS if needed

const Contact = () => {
  const [formStatus, setFormStatus] = useState('');
  const [statusVisible, setStatusVisible] = useState(false);

  useEffect(() => {
    const listener = () => {
      document.querySelectorAll('.celebration-emoji').forEach(e => e.remove());
    };
    window.addEventListener('contact:celebrate', listener);
    return () => window.removeEventListener('contact:celebrate', listener);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    // Show loading
    setFormStatus('Sending...');
    setStatusVisible(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/mahakpateluiux@gmail.com', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      if (result.success === 'true') {
        setFormStatus('🎉 Message sent successfully!');
        form.reset();
        triggerCelebration();
      } else {
        setFormStatus('❌ Something went wrong. Please try again.');
      }
    } catch (error) {
      setFormStatus('❌ Failed to send. Try again later.');
    }

    // Hide after 4s
    setTimeout(() => {
      setStatusVisible(false);
    }, 4000);
  };

  const triggerCelebration = () => {
    const emojis = ['🎊', '✨', '🎉', '🎈'];
    for (let i = 0; i < 64; i++) {
      const el = document.createElement('span');
      el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      el.className = 'celebration-emoji';
      el.style.left = `${Math.random() * 100}vw`;
      el.style.top = `${Math.random() * -100}px`;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 3000);
    }
  };

  return (
    <section id="contact">
      <div className="contact-container">
        <h2 className="contact-header">Get in Touch</h2>
        <p className="contact-description">
          Have a question or want to work together? I'd love to hear from you.
        </p>

        <form id="contact-form" onSubmit={handleSubmit}>
          <input type="hidden" name="_subject" value="New submission from portfolio" />
          <input type="hidden" name="_captcha" value="false" />

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" required placeholder="Your name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" required placeholder="Your email" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" required placeholder="Type your message here..." />
          </div>

          <div className="form-status-wrap">
            <button type="submit" className="send-message-button">Send Message</button>
            <div
              className="form-status-text"
              style={{ opacity: statusVisible ? 1 : 0 }}
            >
              {formStatus}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;