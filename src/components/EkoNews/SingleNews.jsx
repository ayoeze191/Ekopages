import React from 'react'
import { useState } from 'react'
import {Navigate, Link, useNavigate} from "react-router-dom"
import Shimmer from '../ui/Shimmer/Shimmer'
import SkeletonsElement from '../ui/skeletons/SkeletonsElement'
const SingleNews = ({image, title, body, id , date_created}) => {
const [inc, setinc] = useState(false)
const [loaded, setLoaded] = useState(false) 

const textStyle = ['h-[88px] md:h-[46px] overflow-hidden transition ease-in-out delay-150 duration-300']
const fulltextStyle = ['h-200px md:h-[100px] transition ease-in-out delay-150 duration-300']
let date = new Date(date_created)
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 
date = `${monthNames[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`

const navigate = useNavigate()
    

  return (
    <div className='flex justify-between gap-[4.125rem] flex-col md:flex-row' style={{
        paddingBottom: id === 4? "3rem" : 0
    }} >
        <div className='lg:w-[50%]'>
<div className='font-lato flex mb-[1.4rem]'>
    <p className='text-[0.8rem] font-Poppins font-[900] px-[11.25px] py-[9.3px] as text-center flex items-center justify-center rounded-[30.62637px 0px 0px 30.62637px]'>Weekly updates</p>
    <p className='rounded-[0px 5.62637px 5.62637px 0px] bg-[white] px-[11.25px] py-[9.3px] font-Poppins flex items-center justify-center'>{date} </p>
</div>
<p className='text-[20px] md:text-[2.25rem] font-lato font-[700] text-[#232323] mb-[11.25px]'>
    {title}
</p>
<div className='font-lato font-[400] text-[14px] md:text-[1.25rem] text-[#232E52]'>    
    <span className=''>{body.slice(0, 140)}... </span>
    <span className='text-[#5A0C91] text-[18.75px] cursor-pointer hover:underline transition-all'  onClick={() => navigate(`/ekonews/${id}`, {state: {image, title, body, id , date_created}})}>
    Read More
    </span>
</div>
        </div>
        
        <div className=''>
        {!loaded?<div className='relative'>
                <Shimmer />
                <SkeletonsElement type={'images'} />
            
            </div>:null}
            <img src={image}  alt="" className='h-[210px] w-full md:h-[306px] md:w-[655px] object-cover' onLoad={() => setLoaded(true)}/>
        </div>
    </div>
  )
}

export default SingleNews