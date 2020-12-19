import React from 'react';
import { NavLink } from 'react-router-dom';
import Banner from '../Banner/Banner.js';
import CardList from './CardList/CardList.js';
import breadImage from '../../resources/images/product/bread.jpg';
import cakeImage from '../../resources/images/product/cake.jpg';
import sandvichImage from '../../resources/images/product/sandvich.jpg';
import './Main.scss';

const Main = () => {
  return (
    <main className='main'>
      <div className='banner-container container-fluid p-0'>
        <Banner />
      </div>
      <div className='main-container container'>
        <div className='title-divider'>
          <div className='shadow'></div>
          <div className='text'>למה אנחנו?</div>
        </div>
        <CardList></CardList>
        <div className='title-divider'>
          <div className='shadow'></div>
          <div className='text'>מה בתפריט?</div>
        </div>
        <div className='main-products-container container'>
          <div className='main-product-image'>
            <img src={breadImage} alt='bread'></img>
            <NavLink to='/menu/breads' type='button' className='product-type-button btn btn-outline-warning btn-lg'>
              לחם
            </NavLink>
          </div>

          <div className='main-product-image'>
            <img src={cakeImage} alt='cake'></img>
            <NavLink to='/menu/cakes' type='button' className='product-type-button btn btn-outline-warning btn-lg'>
              עוגות
            </NavLink>
          </div>

          <div className='main-product-image'>
            <img src={sandvichImage} alt='sandviches'></img>
            <NavLink to='/menu/sandwiches' type='button' className='product-type-button btn btn-outline-warning btn-lg'>
              סנדויצ'ים
            </NavLink>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
