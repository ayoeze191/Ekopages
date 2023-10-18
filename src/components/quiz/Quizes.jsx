import React, { useEffect, useState } from 'react'
import Question from '../FAQ/Question'
import back from "./../../assets/back.png"
import { questions } from './questionsLiteral'
import { Link } from 'react-router-dom'
import Quiz from './Quiz'
import { useLocation, useParams } from 'react-router-dom'
import AuthButton from '../authButton'
import { BeatLoader } from 'react-spinners'
import instance from '../../axios'
import { tokenConfig } from '../../Config/Config'

const Quizes = () => {
  const params = useParams()
  const loc = useLocation()
  const [all_question] = useState([])
  const [start, setStart] = useState(0)
  const [step, setStep] = useState(4)

  const get_allquizzes = () => {
    instance.get('/Quiz/list_Quizes', tokenConfig())
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  useEffect(() => {
    get_allquizzes()
  })

  // const [handle, Submit]
  const getCourse__Module = (search) => {
    const [course, module] = search.split("&")
    return {"course": course.split("=")[1], "module":module.split("=")[0]}
  }
  console.log(loc.search)
  return (
    <div>
        <section className=" h-[10.625rem] flex justify-center items-center font-lato bold">
    <div className="w-full  lg:px-0 px-6 max-w-[77rem] py-4 mx-auto h-fit px-7  text-[#444444] flex items-center justify-between"> <Link to={'/services'} className=' h-full flex gap-[1.06rem] items-center text-[#5A0C91] font-[400] text-[1rem] cursor:pointer'> <div><img src={back} alt="" /></div>back </Link> 
    <div className='font-[700] text-[3rem] flex h-full items-center '>  POP QUIZZES </div> <div></div> </div>
</section>
    <div className='section flex flex-col gap-[4.125rem]'>
        {questions.map((quest) => <Quiz {...quest}/>)}
        <div className='ml-auto'>
        <button  className=" text-[#5A0C91] text-[17.6px] md:text-[1rem] font-[700] py-[10.5px] px-[33px] rounded-[8px]  border-solid border-2 border-[#5A0C91]  font-lato w-fit mx-auto">
        Next
    </button>
    <button className=" text-[#5A0C91] text-[17.6px] md:text-[1rem] font-[700] py-[10.5px] px-[33px] rounded-[8px]  border-solid border-2 border-[#5A0C91]  font-lato w-fit mx-auto">
        Previous
    </button>
        </div>
    </div>
    </div>
  )
}

export default Quizes