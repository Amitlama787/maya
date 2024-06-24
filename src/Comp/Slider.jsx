import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import 'swiper/css/pagination';

import './styles.css';

import { Pagination } from 'swiper/modules';

import { Autoplay, Navigation } from 'swiper/modules';
import './lolo.css'
function Slider() {

  const[show,setShow]=useState(false)
  return (
    <>
      
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://mandalainfosys.com/wp-content/uploads/2024/03/WhatsApp-Image-2024-03-31-at-14.32.42_a4570c3c-e1711880177362-300x300.jpg" alt="" /></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>


      <section>
        <input type={show ? 'text' :'password'} placeholder='password' />
        
        
        <button onClick={()=> setShow(!show)}>{show ? 'hide': 'show'}</button>
        
      </section>
    </>
  )
}

export default Slider
