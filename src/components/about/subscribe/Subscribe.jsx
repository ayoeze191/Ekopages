import React from 'react'
import bell from "./../../../assets/about/bell.png"
const Subscribe = () => {
    
  return (
    <div className='text-[#ffffff] relative box-border flex flex-col items-center justify-center text-center flex-1 h-full border-solid border-black p-0'>
        <img src={bell} alt="" className='absolute w-[8rem] md:w-initial -top-14 -right-8'/>
        <div className='bg-[#5A0C91] rounded-[5px]'>
        <div className='px-[5rem] py-[2.5rem]'>
            <h1 className='mb-[1rem] lg:text-[1rem] font-[600] md:text-[1.5rem]'>Subscribe to our Newslettter</h1>
            <p className='mb-[2rem] text-[10px] lg:text-[12px] font-[500]'>We would send you all the latest developments in
the world of Edtech. </p>
        <div className='bg-[#ffffff] py-2 flex px-2 rounded-[5px] gap-4 flex-row' >
        <input type="text" placeholder='Type email address' className='w-full outline-none border-none'/>
        <button className='bg-[#5A0C91] text-[#FFFFFF] py-[0.4rem] px-[1.2rem] rounded-[5px] text-[10px] font-[600] lg:font-[500] lg:text-[12px]'>
            Subscribe
        </button>
        </div>
        </div> 
        </div>
    </div>
  )
}

export default Subscribe