import React from 'react';
import titleImage from '../../resources/images/contact/contact3.jpg';
import titleImage2 from '../../resources/images/contact/contact2.jpg';
import './Contact.scss';

const Contact = () => {
  return (
    <div
      className='contact'
      style={{
        backgroundImage: `url(${titleImage})`,
      }}
    >
      <section className='contact-container'>
        {/* <div className='contact-title'>
          <img src={`url(${titleImage2})`} alt='title' />
        </div> */}
        <div className='contact-content'>
          <p>phone</p>
          <p>adress</p>
          <p>facebook</p>
          <p>email</p>
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default Contact;
