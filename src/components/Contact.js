import React from 'react';
import { Formik, Form, Field } from 'formik'; // Form handling library
import './Contact.css'; // Import styling for the contact section

const Contact = () => {
  const handleSubmit = (values, { resetForm }) => { // Form submission handler
    console.log(values); // Currently just logs the submitted values to the console
    resetForm();  // Clears the form after submission
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <div className="contact-info">  {/* Display contact details and social links */}
        <p>Email: your-email@example.com</p> 
        <p>Phone: +1234567890</p>
        <div className="social-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> {/* GitHub icon */}
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> {/* LinkedIn icon */}
          </a>
        </div>
      </div>

      <Formik initialValues={{ name: '', email: '', message: '' }} onSubmit={handleSubmit}> 
        {/* Formik manages form state, validation, and submission */}
        <Form className="contact-form">
          <Field name="name" type="text" placeholder="Your Name" required />
          <Field name="email" type="email" placeholder="Your Email" required />
          <Field name="message" as="textarea" placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </Form>
      </Formik>
    </section>
  );
};

export default Contact;
