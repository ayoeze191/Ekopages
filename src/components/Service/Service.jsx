import React from 'react'
import { Link } from "react-router-dom"
const Service = ({img, h, p, button, imagefirst, url}) => {
  return imagefirst?
    (<Link className='flex flex-row gap-[15px] lg:gap-[3rem] font-lato items-center relative' to={url}>
        <div className='rounded-lg w-[50%] lg:w-[65%] bg-red-500 h-[100%]'><img src={img} alt="" className='h-full w-full'/></div>
        <div className=' w-1/2'>
            <h1 className='text-[#232E52] mb-[0.5rem] lg:mb-[1rem] font-[700] text-[18px] lg:text-[2.25rem]'>{h}</h1>
            <p className='text-[#232E52] mb-[1rem] lg:mb-[2rem] font-[400] text-[14px] lg:text-[1.15rem]'>{p}</p>
            <button className='bg-[#5A0C91] text-[#EFE7F4] py-[0.75rem] px-[1.25rem] rounded-md text-[10px] lg:text-[1rem]'>{button}</button>
        </div>
    </Link>)
    :
    (<Link className='flex flex-row gap-[15px] lg:gap-[3rem] font-lato items-center' to={url}>
        <div className=' w-1/2'>
            <h1 className='text-[#232E52] mb-[0.5rem] lg:mb-[1rem] font-[700] text-[18px] lg:text-[2.25rem]'>{h}</h1>
            <p className='text-[#232E52] mb-[1rem] lg:mb-[2rem] font-[400] text-[14px] lg:text-[1.15rem]'>{p}</p>
            <button className='bg-[#5A0C91] text-[#EFE7F4] py-[0.75rem] px-[1.25rem] rounded-md text-[10px] lg:text-[1rem]'>{button}</button>
        </div>
        <div className='rounded-lg w-[40%] lg:w-[65%] bg-red-500 h-[100%]'><img src={img} alt="" className='h-full '/></div>
    </Link>)
}

export default Service