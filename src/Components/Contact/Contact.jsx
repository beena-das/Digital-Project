import React, { useState } from 'react';
import './Contact.css';
import image from '../Assets/contact.jpg'
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhoneForwarded } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";



const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form Submitted:\n${JSON.stringify(formData, null, 2)}`);
  };

  return (
    <div className="contact-wrapper">
  <h2 className="section-title">Get In Touch</h2>
  <p className="section-subtitle">
    Have questions or ready to start your project? Contact us today!
  </p>

  <div className="contact-container">
    <div className="contact-left">
      <h3>Contact Information</h3>
      <p><strong> <IoLocationOutline className="contact-icon"/> Address: </strong><br></br>     123 Tech Avenue, San Francisco, CA 94107, USA</p>
      <p><strong> <MdOutlinePhoneForwarded className="contact-icon" /> Phone: </strong><br></br> +1 (555) 123-4567</p>
      <p><strong><MdOutlineMailOutline className="contact-icon" /> Email: </strong><br></br> info@techsolutions.com</p>
      <img src={image} alt="" />
    </div>

    <div className="contact-right">
      <h3>Send Us a Message</h3>
        <form onSubmit={handleSubmit}>
          <div className="input-row">
            <div className="form-group">
              <input
                type="text" name="firstName" placeholder=" " value={formData.firstName} onChange={handleChange} required
              />
              <label>First Name</label>
            </div>

            <div className="form-group">
              <input
                type="text" name="lastName" placeholder=" " value={formData.lastName} onChange={handleChange} required
              />
              <label>Last Name</label>
            </div>
          </div>

          <div className="form-group">
            <input
              type="email" name="email" placeholder=" " value={formData.email} onChange={handleChange} required
            />
            <label>Email Address</label>
          </div>

          <div className="form-group">
            <input
              type="tel" name="phone" placeholder=" " value={formData.phone} onChange={handleChange} required
            />
            <label>Phone</label>
          </div>

          <div className="form-group">
            <textarea
              name="message" placeholder=" " rows="4" value={formData.message} onChange={handleChange} required
            />
            <label>Your Message</label>
          </div>

          <button type="submit">Submit Form</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;
