import React from 'react'
import { Link } from 'react-router-dom'

const SingleProject = ({img, h1, p, path}) => {
  return (
      <div className='flex flex-col gap-[2.5rem] font-lato w-full'>
    <div className='flex flex-col '>
        <div className='mb-[1.5rem] rounded-[10px] w-full'><img src={img}  className="w-full md:h-72" alt="" /></div>
        <h1 className='mb-[0.5rem] font-[700] text-[1.5rem]  font-lato'>{h1}</h1>
        <p className='font-[400] text-[1rem] '>{p}</p>
    </div>

    <Link className='flex gap-[11px]' to={`/projects/${path}`}>
        <p className='font-[700] font-lato text-[1rem]'>View project</p> <img src={"wait"} alt="" />
    </Link>
    </div>
  )
}

export default SingleProject