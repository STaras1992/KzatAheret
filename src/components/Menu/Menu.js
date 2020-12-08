import React from 'react';
import ProductCard from './ProductCardsList/ProductCardsList.js';
import product1 from '../../resources/images/product/product1.jpg';
import Nav from './Nav/Nav.js';
import ProductCardsList from './ProductCardsList/ProductCardsList.js';
import './Menu.scss';

const Menu = () => {
  return (
    <div className='menu container'>
      <nav className='menu-navbar'>
        <Nav />
      </nav>
      <section className='product-items'>
        <ProductCardsList />
      </section>
    </div>
  );
};

export default Menu;
