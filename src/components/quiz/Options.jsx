import React, { useState } from 'react'

const Options = ({label, text, selected, onclick}) => {
  // const [selected, setSelected] = useState()
  // console.log(selected)
  return (
    <div className={`${selected?'bg-purple-700 text-white':'bg-white text-[#4A4A4A] '} flex gap-[1rem] py-[1.1rem] px-[4rem] font-lato font-[400] text-[1rem] items-center hover:underine cursor-pointer`} onClick={() => onclick(text)}>
        <div className='rounded-full p-[0.5rem] border-solid border-[1px] border-[#4A4A4A] w-7 h-7 flex items-center justify-center'>{label}</div>
        <div>{text}</div>
    </div>
  )
}

export default Options