import React, { useState, useEffect } from 'react';
import classes from './Contact.module.scss';
import ButtonOutline from '../Components/Atoms/ButtonOutline';


function Contact() {

  const [joinedCount, setJoinedCount] = useState(35000);

  useEffect(() => {
    const interval = setInterval(() => {
      setJoinedCount(0);
    }, 20000);


    return () => clearInterval(interval);
  }, []);



  const [formData, setFormData] = useState({
    email: '',
    error: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.email && formData.email.trim() !== '' && formData.email.includes('@')) {
      console.log(formData.email);
      setFormData({ email: '', error: '' });
    } else {
      setFormData({ ...formData, error: 'Please enter a valid email address.' });
    }
  };

  return (
    <div className={classes.contact}>
      <form onSubmit={handleSubmit} name="contact">
        <p>{joinedCount}+ ALREADY JOINED</p>
        <h3>Stay up to date with what we're doing</h3>
        <div className={classes.input_container}>
          <input
            placeholder="Enter your email address"
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={classes.input}
          />
          <ButtonOutline color="light_red" type="submit">
            Contact Us
          </ButtonOutline>
        </div>
        {formData.error && <p className={classes.error}>{formData.error}</p>}
      </form>
    </div>
  );
}

export default Contact;
