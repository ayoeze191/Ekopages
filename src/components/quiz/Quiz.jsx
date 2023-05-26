import React from 'react'
import Options from './Options'
const Quiz = ({number, question, mark, options}) => {
  return (
    <div className='font-lato flex justify-between' >
        <div className=' w-full max-w-[37.5rem] '>
<div className='flex font-[600] text-[1.25rem] gap-[1rem] items-center'>
    <p>{number}.</p>
    <p>{question}</p>
</div>

<div className='flex flex-col gap-[1rem]'>
    {options.map((option) => <Options {...option}/>)}
</div>
        </div>
        <div>{mark} mark</div>
    </div>
  )
}

export default Quiz