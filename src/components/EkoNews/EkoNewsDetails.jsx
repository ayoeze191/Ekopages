import React from 'react'
import Otherinteresting from './otherInteresting/Otherinteresting'
import { useLocation } from 'react-router-dom'

import { useEffect, useState } from 'react'
import { useModalContext } from '../../context/modal/modal'
const EkoNewsDetails = () => {
  const {setFeedback} = useModalContext()
    const {state} = useLocation()
    const [timer, setTimer] = useState(30)
    console.log(timer)

    useEffect(() => {
      setTimer(10)
      const interval = setInterval(() => {
        if(timer != 0){
        setTimer((prevSeconds) => prevSeconds - 1);
        }
      }, 1000);
      // Cleanup function to clear the interval when the component is unmounted
      return () => clearInterval(interval);
    }, []);
    useEffect(() => {
      if(timer == 0){
        setFeedback()
    }
    }, [timer])

    //(state)
  return (
    <div className='font-lato'>
    <p className=' py-4 mx-auto  px-7 rounded-md text-[1.5rem] md:text-[3rem] font-[700] h-[fit] mb-[42.72px] text-center max-w-[70rem]'>{state.title}</p>
    <div className='flex flex-col gap-[6.25rem] items-center max-w-5xl mx-auto'>
    <div className='w-full md:h-[602px]'>
        <img src={state.image}  className="w-full h-full object-cover" alt="" />
    </div>
    <div className='px-7 tracking-wide text-[#4A4A4A] leading-[150.5%] md:text-[20px] font-lato'>
       {state.body.split("</p>").map((p) => <p>{p}</p>)}
</div>
    </div>
    <div className='w-full mt-[5rem] mx-auto lg:px-0 px-6 max-w-[62rem] flex flex-col gap-[6rem]'>
    <Otherinteresting />
    </div>
</div>
  )
}
export default EkoNewsDetails