import React from 'react'
import SDG_Literacy_drive1 from "./../../../../assets/projects/SDG_Literacy_drive1.png";
// import SDG_Literacy_drive1 from "./../../../../assets/projects/SDG_Literacy_drive1.png1";
import SDG_Literacy_drive2 from "./../../../../assets/projects/SDG_Literacy_drive2.png";
import SDG_Literacy_drive3 from "./../../../../assets/projects/SDG_Literacy_drive3.png";
import SDG_Literacy_drive4 from "./../../../../assets/projects/SDG_Literacy_drive4.png";
import SDG_Literacy_drive5 from "./../../../../assets/projects/SDG_Literacy_drive5.png";
import SDG_Literacy_drive6 from "./../../../../assets/projects/SDG_Literacy_drive6.png";

const Photos = () => {
  return (
    <div className='flex flex-col gap-[2.015rem]'>
        <div className='section  flex flex-col md:flex-row justify-between gap-5 md:gap-0'>
        <div className='rounded-[5px]'><img src={SDG_Literacy_drive1} alt="" className='rounded-[5px]' /></div>
        <div className=''><img src={SDG_Literacy_drive2} alt="" className='rounded-[5px] w-full' /></div>
        <div><img src={SDG_Literacy_drive3} alt="" className='rounded-[5px] w-full' /></div>
        </div>
        <div className='section  flex justify-between flex-col md:flex-row justify-between gap-5 md:gap-0'>
        <div><img src={SDG_Literacy_drive4} alt="" className='rounded-[5px] w-full' /></div>
        <div><img src={SDG_Literacy_drive5} alt="" className='rounded-[5px] w-full' /></div>
        <div><img src={SDG_Literacy_drive6} alt="" className='rounded-[5px] w-full' /></div>
        </div>
    </div>
  )
}

export default Photos