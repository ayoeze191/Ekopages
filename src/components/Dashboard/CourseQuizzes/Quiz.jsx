import React, { useEffect, useState } from 'react'
import Options from './Options'
// import instance from '../../axios'
// import { tokenConfig } from '../../Config/Config'
const Quiz = ({id, number, question, mark, options, addAnswer}) => {
  // console.log(mark)
//   const [loading, setLoading] = useState(false)
  const [answer, setAnswer] = useState(null)
  // this state is needed for the  user to know that their answer has not been selected if there is a network failure
  const [prevAnswer, setPrevAnswer] = useState(null)
  const onClickHandler = (label) => {
    setPrevAnswer(answer)
    setAnswer(label)
  }
  const SubmitAnswer = () => {
    addAnswer(id,answer)
  }

  useEffect(() => {
    if(answer != null){
      SubmitAnswer()
    }
  }, [answer])
  return (
    <div className='font-lato  text-[#4A4A4A]' >
      <div className='flex justify-between'>
        <div className=' w-full max-w-[37.5rem] '>
<div className='flex font-[500]  md:font-[600] md:text-[1.25rem] gap-[1rem] items-center'>
    <p>{number}.</p>
    <p>{question}</p>
</div>


<div className='flex flex-col gap-[1rem]'>
    {options.map((option) => {
      // console.log(answer, option.label)
      return  <Options {...option}  onclick={onClickHandler} selected={answer === option.text}/>})}
</div>
        </div>
        <div className='text-[12px] md:text-[1rem] flex-nowrap flex'>1 mark</div>
        </div>
    </div>
  )
}

export default Quiz