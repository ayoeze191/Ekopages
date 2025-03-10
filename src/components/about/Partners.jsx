import React from 'react'
import British from "./../../assets/about/British.png"
import chevening from "./../../assets/about/chevening.png"
import FME from "./../../assets/about/FME.png"
import LME from "./../../assets/about/LME.png"
import REESAfricaLogo from "./../../assets/about/REESAfricaLogo.png"
import TNCI from "./../../assets/about/TNCI.png"
import educator from "./../../assets/about/educators.png"
// import pollination from "./../../assets/landingpage/polination.jpeg"
import pollination from "./../../assets/pollination.png"

import partners from "./../../assets/landingpage/partners.svg"

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/autoplay";
import  SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay])



const Partners = () => {
  return (
    <div className='relative'>
      <section className="md:bg-rippaperTexture h-[80px] w-full absolute top-[-1px] rotate-180  "></section>
    <div className='section py-12 mx-auto lg:px-0 px-6 font-lato font-bold '>
      {/* <div className=''><img src={partners} /></div> */}
        <h2 className='text-[#480A74] text-[24px] md:text-[44px] mx-auto w-fit mb-12'>Our Partners</h2>
        <Swiper 
        className=' flex w-full  md:w-fit justify-center items-center mx-auto h-[150px] '
            // modules={[Navigation]}
            slidesPerView={1}
            spaceBetween= {0}
            // navigation={true}
            autoplay = {{pauseOnMouseEnter: false}}
            loop={true}
            breakpoints={{
              450: {
                loop: true,
                slidesPerView: 7,
                spaceBetween: 5
              },
              640: {
                loop: true,
                slidesPerView: 7,
                spaceBetween: 56
            }
        }}
        >
            <SwiperSlide><div className='px-3 w-[200px] mx-auto flex items-center   h-full'  ><img src={pollination} className='mx-auto w-40 md:w-full' /></div></SwiperSlide>
            <SwiperSlide><div className='px-3 w-full  mx-auto  flex items-center  h-full' ><img src={British} className='mx-auto w-40 md:w-full '/></div></SwiperSlide>
            <SwiperSlide><div className='px-3 w-fit  mx-auto flex items-center   h-full'  ><img src={chevening} className='mx-auto w-40 md:w-full' /></div></SwiperSlide>
            <SwiperSlide> <div className='px-3 w-fit flex items-center   h-full   mx-auto'  ><img src={TNCI} className='mx-auto w-40 md:w-full' /></div></SwiperSlide>
            <SwiperSlide><div className='px-3 w-fit  mx-auto flex items-center   h-full'  ><img src={FME} className='mx-auto w-40 md:w-full' /></div></SwiperSlide>
            <SwiperSlide> <div className='px-3 w-fit  mx-auto flex items-center   h-full'  ><img src={REESAfricaLogo} className='mx-auto w-40 md:w-full' /></div></SwiperSlide>
            <SwiperSlide><div className='px-3 w-fit mx-auto flex items-center   h-full'  ><img src={LME} className='mx-auto w-40 md:w-full' /></div></SwiperSlide>
            <SwiperSlide><div className='px-3 w-[200px] mx-auto flex items-center   h-full'  ><img src={educator} className='mx-auto w-40 md:w-full' /></div></SwiperSlide>
            <SwiperSlide><div className='px-3 w-full  mx-auto flex items-center   h-full' ><img src={British} className='mx-auto w-40 md:w-full '/></div></SwiperSlide>
            <SwiperSlide><div className='px-3 w-fit  mx-auto flex items-center   h-full'  ><img src={chevening} className='mx-auto w-40 md:w-full' /></div></SwiperSlide>
            <SwiperSlide> <div className='px-3 w-fit   mx-auto flex items-center   h-full'  ><img src={TNCI} className='mx-auto w-40 md:w-full' /></div></SwiperSlide>
            <SwiperSlide><div className='px-3 w-fit  mx-auto flex items-center   h-full'  ><img src={FME} className='mx-auto w-40 md:w-full' /></div></SwiperSlide>
            <SwiperSlide> <div className='px-3 w-fit  mx-auto flex items-center   h-full'  ><img src={REESAfricaLogo} className='mx-auto w-40 md:w-full' /></div></SwiperSlide>
            <SwiperSlide><div className='px-3 w-fit mx-auto flex items-center   h-full'  ><img src={LME} className='mx-auto w-40 md:w-full' /></div></SwiperSlide>
            <SwiperSlide><div className='px-3 w-[200px] mx-auto flex items-center   h-full'  ><img src={educator} className='mx-auto w-40 md:w-full' /></div></SwiperSlide>
          
            </Swiper>        
        </div>
    </div>
  )
}

export default Partners