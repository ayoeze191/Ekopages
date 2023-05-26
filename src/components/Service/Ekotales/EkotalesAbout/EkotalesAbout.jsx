import React from 'react'
import { service } from '../../Services'
import uil_info_circle from "./../../../../assets/Service/uil_info_circle.png"



const EkotalesAbout = () => {
  return (
    <div className='font-lato flex flex-col md:flex-row gap-[3.25rem] section items-center'>
    <div className='rounded-[10px] w-full  md:w-[50%]'><img src={service[1].img} alt="" className='w-full' /></div> 
    <div className='font-[400] font-lato text-[#4A4A4A] text-[1rem] md:text-[20px] w-full md:w-[50%] flex flex-col gap-[2rem] md:gap-0'> <p> This is a weekly publication of children's stories, with themes that align with the sustainable development goals.</p>


<div className='px-[1.6rem] py-[2.0625rem] rounded-[10px] bg-[#EFE7F4] text-[1rem] flex items-start'>
    <div className='flex gap-[1.6rem] items-center mb-[0.5rem] mr-[39.67px]'><img src={uil_info_circle} alt="" /></div>
    <div className=''>
        
        <span className='text-left realtive -ml-5 text-[1rem] font-[700]'>Eko Tales are published on a weekly basis</span>
    <ul className='list-disc'>
        <li>
    Each tale aligns with the sustainable development goals.
        </li>
        <li>
        You can get notified when a new tale is released by subscribing to our newsletter.
        </li>
    </ul>

</div>


</div>

</div>
</div>
  )
}

export default EkotalesAbout