import React, { useEffect, useState } from 'react'
import Options from './Options'
import instance from '../../axios'
import GeneralUiOverlay from '../ui/GeneralUiOverlayLoader'
import { tokenConfig } from '../../Config/Config'
const Quiz = ({id, number, question, mark, options}) => {
  const [loading, setLoading] = useState(false)
  const [answer, setAnswer] = useState(null)
  const onClickHandler = (label) => {
    setAnswer(label)
  }

  const SubmitAnswer = () => {
    setLoading(true)
    instance.post('/dashboard-quizzes/answer_quiz', {question: id, answer}, tokenConfig()) 
    .then((res) => {
      console.log(res)
      setLoading(false)
    })
    .catch((err) => {
      console.log(err)
      setLoading(false)
    })
  }

  useEffect(() => {
    if(answer != null){
      SubmitAnswer()
    }
  }, [answer])

  return (
    <div className='font-lato flex justify-between' >
        <div className=' w-full max-w-[37.5rem] '>
<div className='flex font-[600] text-[1.25rem] gap-[1rem] items-center'>
    <p>{number}.</p>
    <p>{question}</p>
</div>


<div className='flex flex-col gap-[1rem]'>
     {loading && <GeneralUiOverlay />}
    {options.map((option) => <Options {...option} selected={answer === option.label} onclick={onClickHandler}/>)}
</div>
        </div>
        <div>{mark} mark</div>
    </div>
  )
}

export default Quiz