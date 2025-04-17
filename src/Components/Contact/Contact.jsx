import React, { useState } from 'react';
import './Contact.css';

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
    // Later, you can replace this with API call
  };

  return (
    <div>
    <div className="contact-container">
      <div className="contact-left">
        <p><strong>Email: </strong> support@coderdigital.in</p>
        <p><strong>Contact us: </strong> for Customer Course Support at +91 9097470943</p>
        <p><strong>Address: </strong> laxmi nagar, delhi</p>
        <p><em>We are also available on the same numbers on <span style={{ color: "green" }}>WhatsApp</span></em></p>
      </div>
      <div className="contact-right">
        <h3>
          Have a query? Fill the form below and we will reach to you sooner than you expect
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="input-row">
            <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange}
              required
            />
            <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange}
              required
            />
          </div>

          <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange}
            required
          />
          <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange}
            required
          />
          <textarea  name="message" placeholder="Your Message" rows="4" value={formData.message} onChange={handleChange}
            required
          />

          <button type="submit">Submit Form</button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Contact;
