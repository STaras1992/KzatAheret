import React from 'react';

const Menu = () => {
  return (
    <div className='menu'>
      <nav className='navbar'>
        <ul>
          <div className='product-category'>
            <li>לחם</li>
          </div>
          <div className='product-category'>
            <li>לחמניות</li>
          </div>
          <div className='product-category'>
            <li>עוגות</li>
          </div>
          <div className='product-category'>
            <li>אחר</li>
          </div>
        </ul>
      </nav>
      <section className='product-items'>
        <div className='container'></div>
      </section>
    </div>
  );
};

export default Menu;
