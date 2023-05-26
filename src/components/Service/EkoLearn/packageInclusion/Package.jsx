import React from 'react'

const Package = ({image, title, text, btnValue}) => {
  return (
    <div className='flex font-lato gap-[1rem] flex-col'>
        <div> <img src={image} alt="" srcset="" /> </div>
        <div className='text-[13px] md:text-[1.5rem] font-[700]'> {title} </div>
        <div className='font-700 md:text-[1rem] text-[10px]'> {text} </div>
        <button className='md:py-[0.65625rem] md:px-[1.05rem] px-[9.18px] py-[5.73px]  bg-[#EFA30C] text-[1rem] font-normal font-[500] rounded-[5px] w-fit'>{btnValue}</button>
    </div>
  )
}

export default Package