import React from 'react';
import Nav from './Nav/Nav.js';
import ProductCardsList from './ProductCardsList/ProductCardsList.js';
import { getBreadData, getCakeData, getSandwichData } from '../../utills/productUtills.js';
import './Menu.scss';

const Menu = ({ category }) => {
  let products = [];

  switch (category) {
    case 'breads': {
      products = getBreadData();
      break;
    }
    case 'cakes': {
      products = getCakeData();
      break;
    }
    case 'sandwiches': {
      products = getSandwichData();
      break;
    }
    default: {
      break;
    }
  }

  return (
    <section className='menu'>
      <nav className='menu-navbar'>
        <Nav category={category} />
      </nav>
      <section className='product-items'>
        <ProductCardsList products={products} />
      </section>
    </section>
  );
};

export default Menu;
