import React from 'react';
import ProductCard from './ProductCard/ProductCard.js';
import './ProductCardsList.css';

const ProductCardsList = ({ products }) => {
  const productCards = products.map((product) => (
    <ProductCard title={product.title} text={product.text} price={product.price} image={product.image} />
  ));
  return (
    <div className='product-cards-list container'>
      <ul>{productCards}</ul>
    </div>
  );
};

export default ProductCardsList;
