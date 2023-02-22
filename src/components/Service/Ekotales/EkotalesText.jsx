import React from 'react'
import back from "./../../../assets/back.png"
import { Link } from 'react-router-dom'
const EkotalesText = () => {
  return (
    <section className="section h-[10.625rem] flex justify-center items-center font-lato bold">
    <div className="w-full mx-auto lg:px-0 px-6 max-w-[77rem] py-4 mx-auto h-fit px-7  text-[#444444] flex items-center justify-between"> <Link to={'/services'} className=' h-full flex gap-[4.95px] md:gap-[1.06rem] items-center text-[#5A0C91] font-[400] text-[12px] md:text-[1rem] cursor:pointer'> <div><img src={back} alt="" className='h-[9.399px] md:h-initial'/></div>back to service</Link> 
    <div className='font-[700] text-[1.5rem] md:text-[3rem] flex h-full items-center '>  Eko Tales </div> <div></div> </div>
</section>
  )
}

export default EkotalesText