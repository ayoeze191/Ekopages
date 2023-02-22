import React from 'react'
import { Link } from 'react-router-dom'

const Course = ({title, moduleLevel, completionLevel, timeleft, id}) => {
  return (
    <Link className='flex flex-col pt-[2rem] px-[1.5rem] pb-[2.3125rem] bg-[#DCDEF9] rounded-[5px] w-full font-lato' to={`/dashboard/course/${id}`}>
        <p className='mb-[1rem] font-[500] text-[1.5rem]'>{title}</p>
        <p className='mb-[1rem] text-[12px] font-normal font-[500] text-[#4A4A4A]'>{moduleLevel}</p>
        <div className='mb-[2.5rem]'>
        <div className='flex justify-between mb-[0.5rem]'>
            <p className='text-[#303030] font-[400] text-[12px]'>{completionLevel} completed</p> <p>{timeleft}</p>
        </div>
        <div className='w-full bg-[#f9f9f9] rounded-[10px] h-[10px]'>
            <div className='bg-[#5A0C91] rounded-[10px] h-full' style={{width: `${completionLevel}`}}></div>
        </div>
        </div>
        <button className='py-[10px] px-[1.25rem] rounded-[10px] bg-[#5A0C91] text-[white]'>
        Continue learning
        </button>
    </Link>
  )
}

export default Course