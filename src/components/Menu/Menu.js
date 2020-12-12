import React from 'react';
import ProductCard from './ProductCardsList/ProductCardsList.js';
import product1 from '../../resources/images/product/product1.jpg';
import Nav from './Nav/Nav.js';
import ProductCardsList from './ProductCardsList/ProductCardsList.js';
import './Menu.scss';

const Menu = () => {
  return (
    <section className='menu'>
      <nav className='menu-navbar'>
        <Nav />
      </nav>
      <section className='product-items'>
        <ProductCardsList />
      </section>
    </section>
  );
};

export default Menu;
