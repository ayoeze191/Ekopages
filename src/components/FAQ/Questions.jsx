import React from 'react'
import Question from './Question'

const Questions = () => {
    const questions = [
        {question:'What is Ekopages?', answer: 'Ekopages is a Publishing outfit that immerses children into the act of environmental sustainablility with our top books and story'},
        {question:'How do I buy books?', answer: ''},
        {question: 'What is Ekolearn?',answer: ''},
        {question: 'How do I subscribe to EkoLearn?', answer: ''},
        {question:'Is EkoLearn only for schools?', answer:''},
        {question:'Are the courses and books limited to just the SDGs?', answer:''},
        {question:'What is the SDG Literacy Drive?', answer:''},
        {question: 'How can I donate to the SDG Literacy Drive?', answer: ''},
        {question: 'What is the money donated for the SDG Literacy Drive used for?', answer:''}
    ]


  return (
    <div className='flex flex-col gap-5 items-center mt-[4rem] mb-[11.5rem] px-5 md:px-0'>
        {questions.map(quest => <Question  {...quest}/>)}
    </div>
  )
}

export default Questions