import React, { useState, useEffect } from 'react';
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/swiper-bundle.css';
import './Swiper.css';
import { getBannerImagesArray } from '../../utills/imageUtills.js';

const BannerSwiper = () => {
  const images = getBannerImagesArray();
  const sliders = [];

  for (let i = 0; i < 3; i++) {
    sliders.push(
      <SwiperSlide key={i} tag='li'>
        <img src={images[i]} alt={`slide${i + 1}`} />
      </SwiperSlide>
    );
  }
  console.log(sliders);

  return (
    <div className='swiper'>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        //speed={800}
        effect='fade'
        //grabCursor={true}
        //treshold={10} // min px to swipe
        loop={true}
        wrapperTag='ul'
        pagination={{ clickable: true, type: 'bullets' }}
        //scrollbar
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {sliders}
      </Swiper>
    </div>
  );
};

export default BannerSwiper;
