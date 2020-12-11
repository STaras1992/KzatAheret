import React from 'react';
import titleImage from '../../resources/images/contact/contact3.jpg';
import titleImage2 from '../../resources/images/contact/contact2.jpg';
import './Contact.scss';

const Contact = () => {
  return (
    <section className='contact'>
      <div className='contact-container'>
        <div className='contact-content'>
          <p>phone</p>
          <p>adress</p>
          <p>facebook</p>
          <p>email</p>
        </div>
        <div className='contact-title'>
          <img src={titleImage} alt='title' />
        </div>
      </div>
    </section>
  );
};

export default Contact;
