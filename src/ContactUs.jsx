import React from 'react';

function ContactUs() {
  return (
    <div id="contactus" className="section">
      <h2>Contact Us</h2>
      <p>If you have any questions or need further information, please feel free to contact us.</p>
      <div className="contact-details">
        <h3>Our Address</h3>
        <p>123 Awesome Street,<br /> Awesome City, AC 12345</p>

        <h3>Phone</h3>
        <p>(123) 456-7890</p>

        <h3>Email</h3>
        <p><a href="mailto:info@theawesomestore.com">info@theawesomestore.com</a></p>

        <h3>Business Hours</h3>
        <p>Monday - Friday: 9:00 AM - 6:00 PM<br /> Saturday: 10:00 AM - 4:00 PM<br /> Sunday: Closed</p>
      </div>

      <h3>Contact Form</h3>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
