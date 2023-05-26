import React from 'react';

const Sdg = ({img, text}) => {
  return (
    <div className='font-lato text-[1rem] font-lato gap-[2.5rem]'>
        <div><img src={img} alt="" /></div>
        <p> {text} </p>
    </div>
  )
}

export default Sdg