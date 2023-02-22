import React from 'react'

const Service = ({smallimg, h, p, btntext, bg}) => {
    const classNames = ["font-lato rounded-[9.85058px] p-[23.64px]"]
  return (
    <div className={classNames.join(``)} style={{backgroundColor: `${bg}`}}>
        <div className='bg-white px-[1.23125] py-[1.32625] rounded-[9.85058px] mb-[16.25px] w-fit px-[21.2px] py-[19.7px]'>
            <img src={smallimg} alt="" srcset="" />
        </div>
        
        <p className='font-[700] text-[25.291px] md:text-[1.5rem]  text-[#BB7C03] mb-[24.44px]'>{h}</p>
        <p className='font-[400]  text-[1rem] text-[#4A4A4A] mb-[40px]'>{p}</p>
        <button className='bg-[#5A0C91] rounded-[5px] py-[11.8px] px-[21.23px] md:py-[10.5px] md:px-[20px] text-white text-[1rem]'>
            {btntext}
        </button>
    </div>
  )
}

export default Service