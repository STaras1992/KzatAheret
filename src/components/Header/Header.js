import React from 'react';
import './Header.css';
import logo from '../../resources/images/logo.png';

const Header = () => {
  return (
    <header className='navigation'>
      <nav className='navbar navbar-expand-lg main-nav py-lg-3 position-absolute w-100 bg-dark' id='main-nav'>
        <div className='container'>
          <a className='navbar-brand' href='index.html'>
            <img src={logo} alt='logo' className='img-fluid' />
          </a>

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
                <a className='nav-link' href='index.html'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='about.html'>
                  About
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='menu.html'>
                  Recipes
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link' href='gallery.html'>
                  Gallery
                </a>
              </li>

              <li className='nav-item'>
                <a className='nav-link' href='contact.html'>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
