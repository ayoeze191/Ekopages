import React, { useEffect, useState } from 'react'
import Options from './Options'
import instance from '../../axios'
import GeneralUiOverlay from '../ui/GeneralUiOverlayLoader'
import { tokenConfig } from '../../Config/Config'
const Quiz = ({id, number, question, mark, options, addAnswer, answers}) => {
  // console.log(mark)
  const [loading, setLoading] = useState(false)
  const [answer, setAnswer] = useState(answers.find(ans => ans.question == id) != undefined ? answers.find(ans => ans.question == id).answer: null)
  const onClickHandler = (label) => {
    setAnswer(label)
  }
  useEffect(() => {
    if(answers.find(ans => ans.question == id) != undefined){
      setAnswer(answers.find(ans => ans.question == id).answer)
    }
  }, [answers.find(ans => ans.question == id || null)])
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
      console.log(answer, option.text, answer === option.text)
      return  <Options {...option} selected={answer === option.text} onclick={onClickHandler}/>})}
</div>
        </div>
        <div className='text-[12px] md:text-[1rem] flex-nowrap flex'>1 mark</div>
        </div>
    </div>
  )
}

export default Quiz