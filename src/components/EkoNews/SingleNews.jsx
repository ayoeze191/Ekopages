import React from 'react'
import { useState } from 'react'
import {Navigate, Link} from "react-router-dom"

const SingleNews = ({img, title, text, path, id}) => {
const [inc, setinc] = useState(false)
const textStyle = ['h-[88px] md:h-[46px] overflow-hidden transition ease-in-out delay-150 duration-300']
const fulltextStyle = ['h-200px md:h-[100px] transition ease-in-out delay-150 duration-300']

    // console.log(id)

  return (
    <div className='flex justify-between gap-[4.125rem] flex-col md:flex-row' style={{
        paddingBottom: id === 4? "3rem" : 0
    }} >
        <div className='lg:w-[50%]'>
<div className='font-lato flex mb-[1.4rem]'>
    <p className='text-[0.8rem] font-lato font-900 px-[11.25px] py-[9.3px] as text-center flex items-center justify-center rounded-[30.62637px 0px 0px 30.62637px]'>Weekly updates</p>
    <p className='rounded-[0px 5.62637px 5.62637px 0px] bg-[white] px-[11.25px] py-[9.3px] flex items-center justify-center'>AUGUST 13, 2021 </p>
</div>
<p className='text-[2.25rem] font-lato font-[700]'>
    {title}
</p>
<div className='font-lato font-[400] text-[16px] md:text-[1.25rem] text-[#232E52]'>    
    <div className=''>{text}</div>
    <Link className='text-[#5A0C91] text-[18.75px]' to={`${path}`}>
    Read More
    </Link>
</div>
        </div>







        <div className='lg:w-1/2'>
            <img src={img} alt="" className='w-full'/>
        </div>
    </div>
  )
}

export default SingleNews