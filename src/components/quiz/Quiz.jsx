import React, { useEffect, useState } from 'react'
import Options from './Options'
import instance from '../../axios'
import GeneralUiOverlay from '../ui/GeneralUiOverlayLoader'
import { tokenConfig } from '../../Config/Config'
const Quiz = ({id, number, question, mark, options, addAnswer, selectedAnswer, correctAnswer}) => {
  // console.log(mark)
  const [loading, setLoading] = useState(false)
  const [answer, setAnswer] = useState(null)
  // this state is needed for the  user to know that their answer has not been selected if there is a network failure
  const [prevAnswer, setPrevAnswer] = useState(null)
  const onClickHandler = (label) => {
    setPrevAnswer(answer)
    setAnswer(label)
  }

  console.log()
  const SubmitAnswer = () => {
    // setLoading(true)
    // console.log({question: id, answer})
    // instance.post('/dashboard-quizzes/answer_quiz/', {question: id, answer}, tokenConfig()) 
    // .then((res) => {
    //   console.log(res)
    //   setLoading(false)
    // })
    // .catch((err) => {
    //   setAnswer(prevAnswer)
    //   console.log(err)
    //   setLoading(false)
    // })
    addAnswer(id,answer)
  }

  useEffect(() => {
    if(answer != null){
      SubmitAnswer()
    }
  }, [answer])
  console.log(selectedAnswer)
  return (
    <div className='font-lato  text-[#4A4A4A]' >
      <div className='flex justify-between'>
        <div className=' w-full max-w-[37.5rem] '>
<div className='flex font-[600] text-[1.25rem] gap-[1rem] items-center'>
    <p>{number}.</p>
    <p>{question}</p>
</div>


<div className='flex flex-col gap-[1rem]'>
     {loading && <GeneralUiOverlay />}
    {options.map((option) => {
      // console.log(answer, option.label)
      return  <Options {...option} selectedAnswer={selectedAnswer} correct_answer={correctAnswer&&correctAnswer} selected={answer === option.text} onclick={onClickHandler}/>})}
</div>
        </div>
        <div className='text-[12px] md:text-[1rem] flex-nowrap flex'>1 mark</div>
        </div>
        {correctAnswer &&
          answer.toLocaleUpperCase() !== correctAnswer.toLocaleUpperCase() &&
          <div>
          Correct answer: {correctAnswer}
        </div>
}
    </div>
  )
}

export default Quiz