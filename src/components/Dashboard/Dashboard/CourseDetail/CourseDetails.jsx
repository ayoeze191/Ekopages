import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useLocation, useParams } from 'react-router-dom'

import { IoCheckmarkSharp } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import instance from '../../../../axios'
import { tokenConfig } from '../../../../Config/Config'
import { RiLoader4Fill } from "react-icons/ri";
const CourseDetails = () => {
    const [src, setSrc] = useState(null)
    const param = useParams()
    const [modules, setModules]= useState([]);
    const [moduleDetails, setmoduleDetails] = useState([])
    const [current, setCurrent] = useState(1)
    const get_modules = () => {
      console.log("working")
      instance.get(`services/study_all/${param.id}`, tokenConfig())
      .then((res) => {
        console.log(res)
        setModules(res.data.data.map((module) => module.id && {id: module.lesson_number, title: module.topic}))
        setmoduleDetails(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
    }
    useEffect(() => {
        get_modules()
    }, [])

    const changeCurrentModule = (lesson_number) => {
      setCurrent(lesson_number)
    }

  return (
    <div className='flex px-[2.06rem] pb-[3.75rem] pt-[4.0rem] font-lato gap-[2rem]'>
      {/* drop money */}
   {moduleDetails.length > 0 &&   <div>
<div className='bg-[#FFFFFF] shadow rounded-[5px] px-[1.5rem] py-[1.5rem] mb-10 w'>
    <h1 className='font-[600] text-[1.25rem]'>{moduleDetails[0].subject}</h1>
    <p className='font-[400] text-[1rem]'>{moduleDetails.find((mod) => mod.lesson_number === current&&mod).topic}</p>
</div>

   {moduleDetails.find((mod) => mod.lesson_number === current&&mod).video &&
    <video width={640}
    height={360}
     controls
    src={moduleDetails.find((mod) => mod.lesson_number === current&&mod).video !== 'null' ? moduleDetails.find((mod) => mod.lesson_number === current&&mod).video:'' }
    >
    </video>
}
{     <div className='md:w-[640px] font-lato'>
      {moduleDetails.find((mod) => mod.lesson_number === current&&mod).lesson}
      </div>
     } 
    </div>
}

{moduleDetails.length > 0 &&
<div className='hidden lg:flex flex-col gap-[1.5rem] px-[2.25rem] pb-[3.9375rem] bg-[#EFE7F4] w-[30%] text-[#4A4A4A] pt-[2.375rem] '>
        <div className='flex flex-col gap-[3.75rem] font-lato font-[500] text-[1rem] items-start'>
        <div className='flex justify-start gap-[8px] items-center w-full '>
      {/* <GoDotFill /> */}
      <div className='text-left font-[500] font-lato leading-[25.6px]'>MODULES IN THIS COURSE</div>
      <div>
      <RiLoader4Fill size={24} color='#5A0C91'/>
      </div>
    </div>
{modules.sort((a, b) => a.id - b.id).map((mod) => <Module changeCurrentModule={changeCurrentModule} title={mod.title} id={mod.id}/>)}
        </div>
        
        </div>
}
    </div>
  )
}

export default CourseDetails


const Module = ({changeCurrentModule, title, id}) => {
  const [Completed, setCompleted] = useState(false)

  const checkForCompleted = () => {
    instance.get(`/services/check-completion/${id}`, tokenConfig())
    .then((res) => {
      console.log(res.data)
    })
  }
  useEffect(() =>{
    checkForCompleted()
  }, [])

  return(
    <div className='w-full flex flex-col items-center'>
    <div className='flex gap-[8px] items-center w-full  text-[#5A0C91]'>
      <div className=''>
      {Completed ? <IoCheckmarkSharp size={24} color='#5A0C91' width={24} height={24}/> :<GoDotFill color='#5A0C91'/> }
      </div>
      {/* <GoDotFill size={24} color='#5A0C91'/> */}
      <button onClick={() => changeCurrentModule(id)} className=' text-left w-full flex-1  '>{title}</button>
    </div>
    </div>
  )
}