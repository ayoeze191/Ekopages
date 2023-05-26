import React from 'react'
import Question from '../FAQ/Question'
import back from "./../../assets/back.png"
import { questions } from './questionsLiteral'
import { Link } from 'react-router-dom'
import Quiz from './Quiz'

const Quizes = () => {
  return (
    <div>
        <section className=" h-[10.625rem] flex justify-center items-center font-lato bold">
    <div className="w-full mx-auto lg:px-0 px-6 max-w-[77rem] py-4 mx-auto h-fit px-7  text-[#444444] flex items-center justify-between"> <Link to={'/services'} className=' h-full flex gap-[1.06rem] items-center text-[#5A0C91] font-[400] text-[1rem] cursor:pointer'> <div><img src={back} alt="" /></div>back </Link> 
    <div className='font-[700] text-[3rem] flex h-full items-center '>  POP QUIZZES </div> <div></div> </div>
</section>
    <div className='section flex flex-col gap-[4.125rem]'>
        {questions.map((quest) => <Quiz {...quest}/>)}
    </div>
    </div>
  )
}

export default Quizes