import React, { useState, useEffect } from 'react';
import BannerSwiper from '../Swiper/Swiper.js';
import './Banner.css';

const Banner = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className='banner'>
      <BannerSwiper />
    </div>
  );
};

export default Banner;
