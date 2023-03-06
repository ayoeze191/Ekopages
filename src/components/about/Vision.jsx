import React from 'react'
import vision from "./../../assets/about/vision.png";
import mission from "./../../assets/about/mission.png"
const Vision = () => {
  return (
    <div className='section flex flex-col md:flex-row items-center text-center justify-evenly mt-12 '>
        <div className='flex flex-col items-center gap-10  max-w-md'>
            <p className='font-lato font-[600] text-[1.25rem] md:text-[2rem] '>Vision</p>
            <div><img src={vision} className='w-[64px] md:w-full'/></div>
            <p className='font-lato text-[14px] font-[400]'>We believe in a world where people can live in peace and dignity. We want to see a society where gender equality is assured; a planet with a stable climate and healthy environment, as well as empowered people who are able to take sustainable development actions.
</p>
        </div>
        <div className='flex flex-col items-center gap-10 max-w-md mt-12 md:mt-0'>
            <p className='font-lato font-[600] text-[1.25rem] text-[2rem]'>Mission</p>
            <div><img src={mission} className='w-[64px] md:w-full' /></div>
            <p className='font-lato text-[14px] font-[400]'>To promote gender equality and climate justice, and to provide individuals, youths and children with efficient knowledge on the Sustainable Development Goals to ensure a sustainable and equitable future for all.</p>
        </div>
    </div>
  )
}

export default Vision