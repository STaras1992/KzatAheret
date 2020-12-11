import React from 'react';
import titleImage from '../../resources/images/contact/contact3.jpg';
import titleImage2 from '../../resources/images/contact/contact2.jpg';
import './Contact.scss';

const Contact = () => {
  return (
    <section className='contact'>
      <div className='contact-container'>
        <div className='contact-content'>
          <h4>
            <i className='fas fa-phone'></i> 089472567
          </h4>
          <h4>
            <i class='fas fa-home'></i> בית הפועלים 5,רחובות
          </h4>
          <div className='icon'>
            <i class='fas fa-thumbs-up'></i>
          </div>
          <div className='social-links'>
            <i class='fas fa-thumbs-up'></i>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <i class='fab fa-facebook-square'></i>
            &nbsp;
            <i class='fab fa-instagram-square'></i>
          </div>
        </div>
        <div className='contact-image'>
          <img src={titleImage} alt='title' />
        </div>
      </div>
    </section>
  );
};

export default Contact;
