import React from 'react'

const Options = ({label, text}) => {
  return (
    <div className='bg-white flex gap-[1rem] py-[1.1rem] px-[4rem] font-lato font-[400] text-[1rem] items-center text-[#4A4A4A] '>
        <div className='rounded-full p-[0.5rem] border-solid border-[1px] border-[#4A4A4A] w-7 h-7 flex items-center justify-center'>{label}</div>
        <div>{text}</div>
    </div>
  )
}

export default Options