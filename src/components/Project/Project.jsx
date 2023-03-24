import React from 'react'
import arrow from "./../../assets/projects/arrow.png"
import { Link } from 'react-router-dom'
import {Shimmer, Image} from "react-shimmer"

const Project = ({img, h1, p, path}) => {
  return (
    <div className='flex flex-col font-lato'>
        <div className='mb-[1.5rem] '>
            <Image src={img} className="" fallback={<Shimmer width={300} height={300} />}/>
        </div>
        <div className='flex flex-col gap-[0.5rem] mb-2.5rem'>
        <h1 className='font-lato font-[700] text-[24px]'>
            {h1}
        </h1>
        <p className='font-[400] font-[1rem] mb-[2.5rem] text-[1rem]'>
            {p}
        </p>
        </div>

        <Link className='flex items-center gap-[0.7rem]' to={path}>
            <p className='text-[1rem] font-[700] text-[#4A4A4A]'>View Project</p><div><img src={arrow} alt="" />
            </div>
        </Link>
    </div>
  )
}

export default Project