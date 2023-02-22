import React from 'react'

const SingleProject = ({img, h, p}) => {
  return (
      <div className='flex flex-col gap-[2.5rem] font-lato w-full'>
    <div className='flex flex-col '>
        <div className='mb-[1.5rem] rounded-[10px] w-full'><img src={img}  className="w-full" alt="" /></div>
        <h1 className='mb-[0.5rem] font-[700] text-[1.5rem] font-normal font-lato'>{h}</h1>
        <p className='font-[400] text-[1rem] text-[0.68rem]'>{p}</p>
    </div>


    <div className='flex gap-[11px]'>
        <p className='font-[700] font-lato text-[1rem]'>View project</p> <img src={"wait"} alt="" />
    </div>
    </div>
  )
}

export default SingleProject