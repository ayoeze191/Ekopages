import React from 'react'
import British from "./../../assets/about/British.png"
import chevening from "./../../assets/about/chevening.png"
import FME from "./../../assets/about/FME.png"
import LME from "./../../assets/about/LME.png"
import REESAfricaLogo from "./../../assets/about/REESAfricaLogo.png"
import TNCI from "./../../assets/about/TNCI.png"
import partners from "./../../assets/landingpage/partners.svg"


const Partners = () => {
  return (
    <div className='relative'>
      <section className="md:bg-rippaperTexture h-[80px] w-full absolute top-[-1px] rotate-180  "></section>
    <div className='section py-12 mx-auto lg:px-0 px-6 font-lato font-bold '>
      {/* <div className=''><img src={partners} /></div> */}
        <h2 className='text-[#480A74] text-[24px] md:text-[44px] mx-auto w-fit mb-12'>Our Partners</h2>
        <div className=' flex flex-col sm:flex-row gap-10  md:gap-14 w-full md:w-fit justify-between items-center mx-auto'>
            <div className='px-3 w-full max-w-xs' data-aos="zoom-in-up"><img src={British} className='mx-auto md:w-full'/></div>
            <div className='px-3 w-full max-w-xs' data-aos="zoom-in-up"><img src={chevening} className='mx-auto md:w-full' /></div>
            <div className='px-3 w-full max-w-xs' data-aos="zoom-in-up"><img src={TNCI} className='mx-auto md:w-full' /></div>
            <div className='px-3 w-full max-w-xs' data-aos="zoom-in-up"><img src={FME} className='mx-auto md:w-full' /></div>
            <div className='px-3 w-full max-w-xs' data-aos="zoom-in-up"><img src={REESAfricaLogo} className='mx-auto md:w-full' /></div>
            <div className='px-3 w-full max-w-xs' data-aos="zoom-in-up"><img src={LME} className='mx-auto md:w-full' /></div>
        </div>
        </div>

    </div>
  )
}

export default Partners