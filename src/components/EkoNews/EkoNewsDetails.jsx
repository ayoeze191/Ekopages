import React from 'react'
import Otherinteresting from './otherInteresting/Otherinteresting'
import { useLocation } from 'react-router-dom'
const EkoNewsDetails = () => {
    const {state} = useLocation()
    //(state)
  return (
    <div className='font-lato'>
    <p className=' py-4 mx-auto h-fit px-7 rounded-md text-[1.5rem] md:text-[3rem] font-[700] h-[10.625rem] text-center '>{state.title}</p>
    <div className='flex flex-col gap-[6.25rem] items-center max-w-5xl mx-auto'>
    <div className='w-full md:h-[602px]'>
        <img src={state.image}  className="w-full h-full" alt="" />
    </div>
    <div className='px-7'>
       {state.body.split("<p>").map((p) => <p>{p}</p>)}
</div>
    </div>
    <div className='w-full mt-[5rem] mx-auto lg:px-0 px-6 max-w-[62rem] flex flex-col gap-[6rem]'>
    <Otherinteresting />
    </div>
</div>
  )
}
export default EkoNewsDetails