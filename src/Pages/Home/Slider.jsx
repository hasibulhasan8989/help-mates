import {Autoplay, Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Banner from './Banner';

const Slider = () => {
   
  const banner1='https://i.ibb.co/d0bXW6H1/antonino-visalli-RNi-BLy7a-Hck-unsplash.jpg'
  const banner2='https://i.ibb.co/Tqxgrxyb/matheus-g-o-yy39ndc-Pmd-U-unsplash.jpg'
  const banner3='https://i.ibb.co/x8YyQkYb/helena-lopes-PGnq-T0r-XWLs-unsplash.jpg'
  const title1='Be the Change, Start Today!'
  const title2='Your Time Can Change Lives'
  const title3='Together, We Make a Better World'
  const des1='Join hands with a growing community of passionate volunteers making real impact—one act of kindness at a time.'
  const des2=`Whether it's teaching, cleaning, or caring—every moment you give makes a difference. Start your volunteer journey with us.`
  const des3=`Empower communities, uplift lives, and inspire hope. Become a volunteer and be a part of something greater.`
    return (
     <div className='mx-auto container'>

        <Swiper
       modules={[Navigation, Pagination,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
     
      pagination={{ clickable: true }}
      navigation
     
    >
      <SwiperSlide><Banner title={title1} banner={banner1}  des={des1} ></Banner></SwiperSlide>
      <SwiperSlide><Banner title={title2} banner={banner2} des={des2} ></Banner></SwiperSlide>
      <SwiperSlide><Banner title={title3} banner={banner3} des={des3} ></Banner></SwiperSlide>
      
     
    
    </Swiper>
     </div>
    );
};

export default Slider;