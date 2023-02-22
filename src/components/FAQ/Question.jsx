import React from 'react'
import Add from "./../../assets/FAQ/Add.png"
const Question = ({text}) => {
  return (
    <div className='bg-[#ffffff] px-[1rem] py-4 flex justify-between font-lato font-[600] text-black border-none max-w-5xl w-full'>
        <div>{text}</div> <div><img src={Add} /></div>
    </div>
  )
}
export default Question