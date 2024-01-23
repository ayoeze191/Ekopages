import React, { useEffect, useState } from 'react'
import Options from './Options'
// import GeneralUiOverlay from '../../ui/GeneralUiOverlayLoader'
const Quiz = ({ number, question, options, selectedAnswer, correctAnswer }) => {

  
  // this state is needed for the  user to know that their answer has not been selected if there is a network failure
  // console.log(selectedAnswer, correctAnswer,"selected")
  return (
    <div className='font-lato  text-[#4A4A4A]' >
      <div className='flex justify-between'>
        <div className=' w-full max-w-[37.5rem] '>
<div className='flex font-[600] text-[1.25rem] gap-[1rem] items-center'>
    <p>{number}.</p>
    <p>{question}</p>
</div>


<div className='flex flex-col gap-[1rem]'>
   
    {options.map((option) => {
      // console.log(answer, option.label)
      return  <Options {...option} selectedAnswer={selectedAnswer?selectedAnswer:""} correct_answer={correctAnswer&&correctAnswer} />})}
</div>
        </div>
        <div className='text-[12px] md:text-[1rem] flex-nowrap flex'>1 mark</div>
        </div>
        {selectedAnswer !== null &&
          selectedAnswer.toLocaleUpperCase() !== correctAnswer.toLocaleUpperCase() &&
          <div>
          Correct answer: {correctAnswer}
        </div>
}
    </div>
  )
}

export default Quiz