import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import instance from '../../../../axios'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/autoplay";
import { Link } from 'react-router-dom';


import  SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
SwiperCore.use([Autoplay])


const Tales = ({image, title, date_created, id}) => {
    return (
        <Link className='flex flex-col w-full h-full' to={`/details/${id}`}>
            <div className='mt-[24px] mb-[8px] w-full h-full'>
                <img src={image} className='w-[280px] h-[220px] md:w-[350px] md:h-[300px]'/> 
            </div>
            <div className=''>
                <p className='text-[500] md:text-[24px] '>
                    {title}
                </p>
                <p className='text-[12px] font-[500] text-[#4A4A4A] font-[Lato]'>
                {date_created}
                </p>
            </div>
        </Link>
    )
}


const OtherTales = () => {
    
    const [allTales, setAlltales] = useState([])

    const get_tales = () => {
        instance.get('/services/tales/')
        .then((res) => {
            setAlltales(res.data.data)
        })
    }
    
    useEffect(() => {
        get_tales()
    }, [])

  return (
    <div className='w-full h-full mb-[86px]'>
        <p className='mx-auto font-[500] text-[24px] md:text-[36px] md:leading-[43.2px] font-lato text-center'>Check out other Eko tales</p>
        <div className='w-[100vw] h-full'>
            <Swiper 
        slidesPerView={1}
        modules={[Autoplay, A11y]}
        loop
        freeMode
        breakpoints={{
            640: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }}
        >

            {allTales.map((tale, index) =><SwiperSlide key={index}> <Tales {...tale}/></SwiperSlide> )}
            </Swiper>
        </div>
    </div>
  )
}

export default OtherTales