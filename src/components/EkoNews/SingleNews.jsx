import React from 'react'
import { useState } from 'react'
import {Navigate, Link, useNavigate} from "react-router-dom"

const SingleNews = ({image, title, body, id , date_created}) => {
const [inc, setinc] = useState(false)
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
    <p className='text-[0.8rem] font-lato font-900 px-[11.25px] py-[9.3px] as text-center flex items-center justify-center rounded-[30.62637px 0px 0px 30.62637px]'>Weekly updates</p>
    <p className='rounded-[0px 5.62637px 5.62637px 0px] bg-[white] px-[11.25px] py-[9.3px] flex items-center justify-center'>{date} </p>
</div>
<p className='text-[2.25rem] font-lato font-[700]'>
    {title}
</p>
<div className='font-lato font-[400] text-[16px] md:text-[1.25rem] text-[#232E52]'>    
    <div className=''>{body.slice(0, 140)}</div>
    <div className='text-[#5A0C91] text-[18.75px] cursor-pointer' to={`/new/${id}`} onClick={() => navigate(`${id}`, {state: {image, title, body, id , date_created}})}>
    Read More
    </div>
</div>
        </div>





        <div className='h-[210px] md:h-[306px] md:w-[655px]'>
            <img src={image}  alt="" className='w-full'/>
        </div>
    </div>
  )
}

export default SingleNews