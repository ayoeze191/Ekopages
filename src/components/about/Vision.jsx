import React from 'react'
import vision from "./../../assets/about/vision.png";
import mission from "./../../assets/about/mission.png"
const Vision = () => {
  return (
    <div className='section flex flex-col md:flex-row items-center text-center justify-evenly mt-12 '>
        <div className='flex flex-col items-center gap-10  max-w-md'>
            <p className='font-lato font-[600] text-[1.25rem] md:text-[2rem] '>Vision</p>
            <div><img src={vision} className='w-[64px] md:w-full'/></div>
            <p className='font-lato text-[14px] font-[400]'>To create a world where every child and educator is equipped in foundational learning to drive
            sustainable development and make informed choices for a better planet.
</p>
        </div>
        <div className='flex flex-col items-center gap-10 max-w-md mt-12 md:mt-0'>
            <p className='font-lato font-[600] text-[1.25rem] text-[2rem]'>Mission</p>
            <div><img src={mission} className='w-[64px] md:w-full' /></div>
            <p className='font-lato text-[14px] font-[400]'>To empower children and educators with foundational literacy, numeracy, and climate education
through our innovative e-learning platform, engaging literature, and hands-on community
programs. We aim to build a generation equipped with the knowledge and skills needed to drive
sustainable development, address global challenges, and make informed choices for a better,
greener planet by 2030.</p>
        </div>
    </div>
  )
}

export default Vision