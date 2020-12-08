import React from 'react';
import ProductCard from './ProductCard/ProductCard.js';
import './ProductCardsList.css';

const ProductCardsList = () => {
  return (
    <div className='product-cards-list container'>
      <ul>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </ul>
    </div>
  );
};

export default ProductCardsList;
