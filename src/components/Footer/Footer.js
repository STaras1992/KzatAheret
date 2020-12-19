import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container footer-container'>
        <div className='footer-hours-container'>
          <h5 className='footer-hours-title'>שעות פתיחה</h5>
          <ul className='footer-hours-list'>
            <li className='info'>
              <h6 className='days'>א,ב,ד,ה:</h6>
              <h6>16:00-19:00 , 08:00-13:00 </h6>
            </li>
            <li className='info'>
              <h6 className='days'>ג</h6>
              <h6>08:00-13:00</h6>
            </li>
            <li className='info'>
              <h6 className='days'>ו</h6>
              <h6>07:00-14:00</h6>
            </li>
          </ul>
        </div>

        <div className='footer-contacts-container '>
          <h5 className='footer-contacts-title'>צור קשר</h5>

          <ul className='footer-contacts-list'>
            <li>
              089472567 <i className='fas fa-phone-square-alt'></i>
            </li>
            <li>
              stas23061992@gmail.com <i className='fas fa-envelope-square'></i>
            </li>
            <li>
              בית הפועלים 5,רחובות <i className='fas fa-home'></i>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
