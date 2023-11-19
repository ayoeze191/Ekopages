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
// import { Navigation } from 'swiper/modules';
import { Link, useNavigate } from 'react-router-dom';

import  SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay])


const Tales = ({image, title, date_created, id}) => {

    const datecreated = new Date(date_created)
    console.log(datecreated)
    const navigate = useNavigate()

    return (
        <div className='flex flex-col w-full h-full cursor-pointer'  onClick={() =>navigate(`/services/ekotales/details/${id}`, {replace: true})}>
            <div className='mt-[24px] mb-[8px]'>
                <img src={image} className='w-[280px] h-[220px] md:w-[350px] md:h-[300px]'/> 
            </div>
            <div className=''>
                <p className='text-[500] md:text-[24px] '>
                    {title}
                </p>
                <p className='text-[12px] font-[500] text-[#4A4A4A] font-[Lato]'>
                {datecreated.getDate()}.{datecreated.getMonth()}.{datecreated.getFullYear()}
                </p>
            </div>
        </div>
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
    <div className='w-full h-full mb-[86px] relative overflow-x-hidden'>
        <p className='mx-auto font-[500] text-[24px] md:text-[36px] md:leading-[43.2px] font-lato text-center'>Check out other Eko tales</p>
        <div className='w-full h-full ] overflow-hidden' >
            <Swiper 
            modules={[Navigation]}
            slidesPerView={2}
            spaceBetween= {0}
            // navigation={true}
            autoplay = {{pauseOnMouseEnter: false}}
            loop={true}
            breakpoints={{
            640: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }}
        >
            {/* <button className='prevEl'> 
                prev
            </button> */}
            
            {allTales.map((tale, index) =><SwiperSlide key={index} style={{width: "100%"}}> <Tales {...tale}/></SwiperSlide> )}
            {/* <button className='nextEl'> */}
                {/* next */}
            {/* </button> */}

            </Swiper>
        </div>
    </div>
  )
}

export default OtherTales