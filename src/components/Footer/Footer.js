import React from 'react';
import logo from '../../resources/images/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-lg-3 col-md-4 mb-4 mb-lg-0'>
            <div className='widget hours'>
              <h4 className='mb-3'>שעות פתיחה</h4>

              <div className='info'>
                <p className='mb-0 days'>א,ב,ד,ה:</p>
                <h5>16:00-19:00 , 08:00-13:00 </h5>
              </div>
              <div className='info'>
                <p className='mb-0 days'>ג</p>
                <h5>08:00-13:00</h5>
              </div>
              <div className='info'>
                <p className='mb-0 days'>ו</p>
                <h5>07:00-14:00</h5>
              </div>
            </div>
          </div>

          <div className='col-lg-4 ml-auto col-md-5 mb-5 mb-lg-0'>
            <div className='widget contacts'>
              <h4 className='mb-3'>צור קשר</h4>

              <ul className='list-unstyled mb-3 footer-contact'>
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;

//   return (
//     <div classNameName='main-footer'>
//       <div classNameName='container'>
//         <div classNameName='row'>
//           {/* Column1 */}
//           <div classNameName='col'>
//             <h4>THICC MEMES INC</h4>
//             <h1 classNameName='list-unstyled'>
//               <li>342-420-6969</li>
//               <li>Moscow, Russia</li>
//               <li>123 Streeet South North</li>
//             </h1>
//           </div>
//           {/* Column2 */}
//           <div classNameName='col'>
//             <h4>Stuff</h4>
//             <ui classNameName='list-unstyled'>
//               <li>DANK MEMES</li>
//               <li>OTHER STUFF</li>
//               <li>GUD STUFF</li>
//             </ui>
//           </div>
//           {/* Column3 */}
//           <div classNameName='col'>
//             <h4>WELL ANOTHER COLUMN</h4>
//             <ui classNameName='list-unstyled'>
//               <li>DANK MEMES</li>
//               <li>OTHER STUFF</li>
//               <li>GUD STUFF</li>
//             </ui>
//           </div>
//         </div>
//         <hr />
//         <div classNameName='row'>
//           <p classNameName='col-sm'>
//             &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved | Terms Of Service | Privacy
//           </p>
//         </div>
//       </div>
//     </div>
//   );
