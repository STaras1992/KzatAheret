import React from 'react';
import logo from '../../resources/images/logo.png';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
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

      <div className='footer-logo'>
        <img src={logo} alt='footer-logo' className='img-fluid logo' />
      </div>
    </footer>
  );
};

export default Footer;

// return (
//   <footer className='footer'>
//     <div className='container'>
//       <div className='row justify-content-center'>
//         <div className='col-lg-3 col-md-4'>
//           <div className='widget hours'>
//             <h5 className='mb-3'>שעות פתיחה</h5>

//             <div className='info'>
//               <p className='mb-0 days'>א,ב,ד,ה:</p>
//               <h6>16:00-19:00 , 08:00-13:00 </h6>
//             </div>
//             <div className='info'>
//               <p className='mb-0 days'>ג</p>
//               <h6>08:00-13:00</h6>
//             </div>
//             <div className='info'>
//               <p className='mb-0 days'>ו</p>
//               <h6>07:00-14:00</h6>
//             </div>
//           </div>
//         </div>

//         <div className='col-lg-4 ml-auto col-md-5 '>
//           <div className='widget contacts'>
//             <h5 className='mb-3'>צור קשר</h5>

//             <ul className='list-unstyled mb-3 footer-contact'>
//               <li>
//                 089472567 <i className='fas fa-phone-square-alt'></i>
//               </li>
//               <li>
//                 stas23061992@gmail.com <i className='fas fa-envelope-square'></i>
//               </li>
//               <li>
//                 בית הפועלים 5,רחובות <i className='fas fa-home'></i>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className='footer-logo'>
//           <img src={logo} alt='footer-logo' className='img-fluid logo' />
//         </div>
//       </div>
//     </div>
//   </footer>
// );
