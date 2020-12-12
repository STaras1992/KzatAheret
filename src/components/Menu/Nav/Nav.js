import React from 'react';
import './Nav.scss';

const Nav = (props) => {
  return (
    <nav className='navbar navbar-expand position-relative w-100 bg-faded'>
      <div className='container nav-container'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <a href='#' className='nav-link'>
              לחם
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link'>
              מאפים
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link'>
              עוגות
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link'>
              סנדויצ'ים
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
  // return (
  //   <div>
  //     <ul className='menu-nav d-flex justify-content-around'>
  //       <li className='nav-item'>
  //         <a className='nav-link' href='#'>
  //           לחם
  //         </a>
  //       </li>
  //       <li className='nav-item'>
  //         <a className='nav-link' href='#'>
  //           לחמניות
  //         </a>
  //       </li>
  //       <li className='nav-item'>
  //         <a className='nav-link' href='#'>
  //           עוגות
  //         </a>
  //       </li>
  //     </ul>
  //   </div>
  // );
};

export default Nav;
