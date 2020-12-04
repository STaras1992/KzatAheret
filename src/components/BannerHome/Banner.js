import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './Banner.css';

import image1 from '../../resources/images/banner1.jpg';
import image2 from '../../resources/images/banner2.jpg';
import image3 from '../../resources/images/banner3.jpg';

const images = [image1, image2, image3];

const Banner = () => {
  const [index, setIndex] = useState(0);

  const sliders = [];
  for (let i = 0; i < 3; i++) {
    sliders.push(
      <SwiperSlide key={i} tag='il'>
        <img src={images[i]} alt={`slide${i + 1}`} />
      </SwiperSlide>
    );
  }

  return (
    <div>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        wrapperTag='ul'
        paggination
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {sliders}
      </Swiper>
    </div>
  );
};

// const Banner = () => {
//   return (
//     <section className='slider-hero hero-slider  hero-style-1  '>
//       <div className='swiper-container swiper-container-horizontal'>
//         <div className='swiper-wrapper'>
//           <div className='swiper-slide slide-item'>
//             <div
//               className='slide-inner slide-bg-image main-sider-inner'
//               data-background={image1}
//               style={{ backgroundImage: 'uri(image1)' }}
//             >
//               {/* <div className="overlay"></div> */}
//               <div className='container'>
//                 <div className='row'>
//                   <div className='col-lg-7'>
//                     <span data-swiper-parallax='300' className='text-primary font-extra font-md'>
//                       Welcome to restuarant
//                     </span>
//                     <h1 className='mt-3 mb-5 text-lg text-white' data-swiper-parallax='400'>
//                       Fresh,Delicious meal to reach your optimum health and fitness
//                     </h1>
//                     <a href='menu.html' className='btn btn-main mr-3' data-swiper-parallax='500'>
//                       View Menu
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className='swiper-slide slide-item'>
//             <div className='slide-inner slide-bg-image main-sider-inner' data-background={image2}>
//               {/* <div className="overlay"></div>  */}
//               <div className='container'>
//                 <div className='row'>
//                   <div className='col-lg-7'>
//                     <span data-swiper-parallax='300' className='text-primary font-extra font-md'>
//                       Welcome to restuarant
//                     </span>
//                     <h1 className='mt-3 mb-5 text-lg text-white' data-swiper-parallax='400'>
//                       Good food starts with good ingridients.Have a great time with us
//                     </h1>
//                     <a href='menu.html' className='btn btn-main mr-3' data-swiper-parallax='500'>
//                       View Menu
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className='swiper-slide slide-item'>
//             <div className='slide-inner slide-bg-image main-sider-inner' data-background={image3}>
//               {/* <div className="overlay"></div>  */}
//               <div className='container'>
//                 <div className='row'>
//                   <div className='col-lg-7'>
//                     <span data-swiper-parallax='300' className='text-primary font-extra font-md'>
//                       Welcome to restuarant
//                     </span>
//                     <h1 className='mt-3 mb-5 text-lg text-white' data-swiper-parallax='400'>
//                       We deliver good quality food with great service to our customers
//                     </h1>
//                     <a href='menu.html' className='btn btn-main mr-3' data-swiper-parallax='500'>
//                       View Menu
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className='swiper-button-next'></div>
//         <div className='swiper-button-prev'></div>
//       </div>
//     </section>
//   );
// };

export default Banner;
