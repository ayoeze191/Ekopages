import React from 'react'
import Question from './Question'

const Questions = () => {
    const questions = [
        'What is Ekopages?',
        'How do I buy books?',
        'What is Ekolearn?',
        'How do I subscribe to EkoLearn?',
        'Is EkoLearn only for schools?',
        'Are the courses and books limited to just the SDGs?',
        'What is the SDG Literacy Drive?',
        'How can I donate to the SDG Literacy Drive?',
        'What is the money donated for the SDG Literacy Drive used for?'
    ]


  return (
    <div className='flex flex-col gap-5 items-center mt-[4rem] mb-[11.5rem] px-5 md:px-0'>
        {questions.map(quest => <Question  text={quest}/>)}
    </div>
  )
}

export default Questions