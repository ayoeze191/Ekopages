import React from 'react'
import { useNavigate } from 'react-router-dom'

const MyCourses = () => {
  const navigate = useNavigate()
  return (
    <div className='w-full h-full flex-1 flex justify-center items-center'>
        <div className='font-lato mx-auto text-center' >
        <p className='font-lato font-[500] text-[36px]'> No Courses  Yet</p>
        <p className='text-[24px]'>
        Would you like to take a course? 
        </p>
     <button onClick={() => navigate('/explore-courses')} className='font-[400] text-[#E9E9E9] py-[15px] px-[30px] bg-[#5A0C91] rounded-[10px] font-lato mx-auto text-sm md:text-base'>Return to Home Page</button>
      
    </div>
    </div>
  )
}

export default MyCourses