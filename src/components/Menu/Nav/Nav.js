import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss';

const Nav = ({ category }) => {
  const [activeCategory, setActiveCategory] = useState(category);

  if (category !== activeCategory) {
    setActiveCategory(category);
  }

  return (
    <nav className='navbar navbar-expand position-relative w-100 bg-faded'>
      <div className='container nav-container'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <NavLink to='/menu/breads' className={activeCategory === 'breads' ? 'nav-link active' : 'nav-link'}>
              לחם
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/menu/cakes' className={activeCategory === 'cakes' ? 'nav-link active' : 'nav-link'}>
              עוגות
            </NavLink>
          </li>
          {/* <li className='nav-item'>
            <a href='#' className='nav-link'>
              עוגות
            </a>
          </li> */}
          <li className='nav-item'>
            <NavLink to='/menu/sandwiches' className={activeCategory === 'sandwiches' ? 'nav-link active' : 'nav-link'}>
              סנדויצ'ים
            </NavLink>
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
