import React, { useState } from 'react'
import arrow from "./../../assets/projects/arrow.png"
import { Link } from 'react-router-dom'
import { Image} from "react-shimmer"

import {AiOutlineArrowRight} from "react-icons/ai"
import SkeletonsElement from '../ui/skeletons/SkeletonsElement'
import { Shimmer } from '../ui/skeletons/Shimmer'

const Project = ({img, h1, p, path}) => {
    const [loaded, setLoaded] = useState(false) 

  return (
    <div className='flex flex-col font-lato w-full rounded-[20px]'>
        <div className='mb-[1.5rem] w-full h-[300px] relative object-contain'>
            {!loaded?<div className='relative'>
                <Shimmer />
                <SkeletonsElement type={'images'} />
            
            </div>:null}
            <img src={img} alt='' className='h-full w-full rounded-t-[20px]' onLoad={() => setLoaded(true)}/>
        </div>
        <div className='flex flex-col gap-[0.5rem] mb-2.5rem'>
        <h1 className='font-lato font-[700] text-[24px]'>
            {h1}
        </h1>
        {/* <p className='font-[400]  mb-[2.5rem] text-[1rem]'>
            {p}
        </p> */}
        </div>
        <Link className='flex items-center gap-[0.7rem] text-[#4A4A4A] hover:text-[#5A0C91] hover:underline mt-4' to={path}>
            <p className='text-[1rem] font-[700] text-[#4A4A4A] hover:text-[#5A0C91] hover:underline'>View Project</p><div><AiOutlineArrowRight />                                                                       
            </div>
        </Link>
    </div>
  )
}

export default Project