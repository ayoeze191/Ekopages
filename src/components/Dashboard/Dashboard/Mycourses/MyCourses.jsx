import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import bell from "./../../../../assets/dashboard/bell.png"
import Pending from './Pending'
const MyCourses = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className='py-[54px] flex justify-between pr-[78px]'>
        <div className='flex  gap-[1rem] pl-[40px]'>
          <button className='bg-[#174D00] w-[125px] h-[40px] border-solid border-[1px] border-[#888888] text-[#FBFBFB] rounded-[5px]'>
          Pending
          </button>
          <button className='w-[125px] h-[40px] border-solid border-[1px] border-[#888888] rounded-[5px] text-[#888888]'>
          Completed
          </button>
          </div>
          <div className='flex  gap-[1rem] pl-[40px]'>
          <Link className='bg-[#5A0C91] w-[125px] h-[40px] border-solid border-[1px] text-center border-[#888888] text-[#FBFBFB] rounded-[5px] flex justify-center items-center' to={'/quizes/h'}>
          Take a Quiz
          </Link>
          <div>
              <img src={bell} alt="" />
        </div>
          </div>
      </div>
      <Pending />
    </div>
  )
}





const Empty = () => {
  const navigate = useNavigate()
  return (
  <div className='w-full h-full flex-1 flex justify-center items-center'>
  <div className='font-lato mx-auto text-center' >
  <p className='font-lato font-[500] text-[36px]'> No Courses  Yet</p>
  <p className='text-[24px]'>
  Would you like to take a course? 
  </p>
<button onClick={() => navigate('/explore-courses')} className='font-[400] text-[#E9E9E9] py-[15px] px-[30px] bg-[#5A0C91] rounded-[10px] font-lato mx-auto text-sm md:text-base mt-[50px]'>View Courses</button>
</div>
<Pending />
</div>
  )
}


export default MyCourses