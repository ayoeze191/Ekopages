import React from 'react'
import arrow from "./../../assets/projects/arrow.png"
const Project = ({img, h1, p}) => {
  return (
    <div className='flex flex-col font-lato'>
        <div className='mb-[1.5rem] '>
            <img src={img} className=""/>
        </div>
        <div className='flex flex-col gap-[0.5rem] mb-2.5rem'>
        <h1 className='font-lato font-[700] text-[24px]'>
            {h1}
        </h1>
        <p className='font-[400] font-[1rem] mb-[2.5rem] text-[1rem]'>
            {p}
        </p>
        </div>

        <div className='flex items-center gap-[0.7rem]'>
            <p className='text-[1rem] font-[700] text-[#4A4A4A]'>View Project</p><div><img src={arrow} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Project