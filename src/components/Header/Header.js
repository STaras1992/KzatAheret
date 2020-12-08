import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import logo from '../../resources/images/logo.png';

const Header = () => {
  return (
    <header className='navigation'>
      <nav className='navbar navbar-expand-lg  position-relative w-100 bg-dark'>
        <div className='container'>
          <button
            className='navbar-toggler collapsed bg-light'
            type='button'
            data-toggle='collapse'
            data-target='#navigation'
            aria-controls='navigation'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='fa fa-bars'></span>
          </button>

          <div className='collapse navbar-collapse' id='navigation'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item active'>
                <NavLink to='/' className='nav-link'>
                  דף הבית
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/about' className='nav-link'>
                  עלינו
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/menu' className='nav-link'>
                  תפריט
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/gallery' className='nav-link'>
                  גלריה
                </NavLink>
              </li>

              <li className='nav-item'>
                <NavLink to='/contact' className='nav-link'>
                  צור קשר
                </NavLink>
              </li>
            </ul>
          </div>
          <a className='navbar-brand' href='index.html'>
            <img src={logo} alt='logo' className='img-fluid' />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
