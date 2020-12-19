import React from 'react';
import product1 from '../../../../resources/images/product/product2.jpg';
import './ProductCard.css';

const ProductCard = ({ title, text, price, image }) => {
  return (
    <>
      <li className='booking-card' style={{ backgroundImage: `url(${image})` }}>
        <div className='book-container'>
          <div className='content'>
            <button className='btn'>הוסף לסל</button>
          </div>
        </div>
        <div className='informations-container'>
          <h2 className='title'>{title}</h2>
          <p className='sub-title'>{text}</p>
          <p className='price'>
            <svg className='icon' style={{ width: '24px', height: '24px' }} viewBox='0 0 24 24'>
              <path
                fill='currentColor'
                d='M3,6H21V18H3V6M12,9A3,3 0 0,1 15,12A3,3 0 0,1 12,15A3,3 0 0,1 9,12A3,3 0 0,1 12,9M7,8A2,2 0 0,1 5,10V14A2,2 0 0,1 7,16H17A2,2 0 0,1 19,14V10A2,2 0 0,1 17,8H7Z'
              />
            </svg>
            {price} שח
          </p>
          <div className='more-information'>
            <p className='disclaimer'></p>
          </div>
        </div>
      </li>
    </>
  );
};

export default ProductCard;
