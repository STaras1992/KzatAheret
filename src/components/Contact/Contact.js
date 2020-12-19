import React from 'react';
import titleImage from '../../resources/images/contact/contact3.jpg';
import back1 from '../../resources/images/background/transparent1.png';
import titleImage2 from '../../resources/images/contact/contact2.jpg';
import './Contact.scss';

const Contact = () => {
  return (
    <section className='contact' style={{ backgroundImage: `url(${back1})` }}>
      <div className='contact-container container'>
        <div className='contact-content'>
          <h1>
            <i className='fas fa-phone'></i> 089472567
          </h1>
          <h1>
            <i className='fas fa-home'></i> בית הפועלים 5,רחובות
          </h1>
          {/* <div className='icon'>
            <i className='fas fa-thumbs-up'></i>
          </div> */}
          <div className='social-links'>
            <a a href='https://www.facebook.com/idazeev1' target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-facebook-square'></i>
            </a>
            &nbsp;
            <a href='https://www.facebook.com/idazeev1' target='_blank' rel='noopener noreferrer'>
              <i className='fab fa-instagram-square'></i>
            </a>
          </div>
        </div>
        {/* <div className='contact-image'>
          <img src={titleImage} alt='title' />
        </div> */}
        <div className='contact-bottom-title'>
          <p>בשבילכם אידה וזאב...</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
