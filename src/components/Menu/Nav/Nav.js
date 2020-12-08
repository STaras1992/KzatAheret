import React from 'react';
// import { NavLink } from 'react-router-dom';
import './Nav.css';

const Nav = (props) => {
  return (
    <div>
      <ul className='menu-nav d-flex justify-content-around'>
        <li className='nav-item'>
          <a className='nav-link' href='#'>
            לחם
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#'>
            לחמניות
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='#'>
            עוגות
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
