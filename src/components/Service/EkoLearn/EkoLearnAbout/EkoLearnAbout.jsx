import React from 'react'
import uil_info_circle from "./../../../../assets/Service/uil_info_circle.png"
import { service } from '../../Services'
const EkoLearnAbout = () => {
  return (
    <div className='font-lato flex gap-[3.25rem] section items-center flex-col md:flex-row'>
        <div className='rounded-[10px] w-full md:w-[50%]'><img src={service[0].img} alt=""  className='w-full'/></div> 
        <div className='font-[400] text-[#444444] md:text-[20px] text-[13px] w-full md:w-[50%]'> <p> This is a subscription-based platform for schools to subscribe their students to.
Each School can register as many as 10,000 students on Eko Learn for N5,000 each per year.</p>
    <div className='w-full flex justify-between items-center my-[3rem]'><p className='text-[20.67px] md:text-[2rem] font-[600]'>#15000</p> <button className='bg-[#5A0C91] py-[9.25px] px-[18.5px] md:py-[0.9375rem] md:px-[1.9375rem] text-white rounded-[10px] text-[14.4px] md:text-[24px] font-[500] md:font-[400]'>Subscribe Now</button> </div>

    <div className='px-[1.6rem] py-[2.0625rem] rounded-[10px] bg-[#EFE7F4] text-[1rem] flex items-start'>
        <div className='flex gap-[1.6rem] items-center mb-[0.5rem] mr-[39.67px]'><img src={uil_info_circle} alt="" /></div>
        <div className=''>
            
            <span className='text-left realtive -ml-5 text-[12px] md:text-[1rem] font-[700]'>Eko Learn subscription pack includes the following;</span>
        <ul className='list-disc font-[400] text-[12px] md:font-[400] md:text-[1rem]'>
            <li>
        5 SDG-themed books with exercises for the children.
            </li>
            <li>
            100 SDG pop-quizzes.
            </li>
            <li>
            1 curated beginner SDG course for children with certification. OR
            </li>
            <li>
            1 curated beginner SDG teaching training course for teachers with certification.
            </li>
            <li>
                3 Short stories and exercises.
            </li>
        </ul>

</div>



    </div>

</div>
    </div>
  )
}

export default EkoLearnAbout
