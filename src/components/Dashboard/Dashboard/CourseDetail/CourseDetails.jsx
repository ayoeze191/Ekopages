import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { useLocation, useParams } from 'react-router-dom'

import History from './History'
import Introduction from './Introduction'
import MDGs from './MDGs'
import Objective from './Objective'
import SDGs from './SDGs'
import instance from '../../../../axios'
import { tokenConfig } from '../../../../Config/Config'

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
   {moduleDetails.length > 0 &&   <div>
<div className='bg-[#FFFFFF] shadow rounded-[5px] px-[1.5rem] py-[1.5rem] mb-10'>
    <h1 className='font-[600] text-[1.25rem]'>{moduleDetails[0].subject}</h1>
    <p className='font-[400] text-[1rem]'>{moduleDetails.find((mod) => mod.lesson_number === current&&mod).topic}</p>
</div>

    <video width={640}
    height={360}
     controls
    src={moduleDetails.find((mod) => mod.lesson_number === current&&mod).video !== 'null' ? moduleDetails.find((mod) => mod.lesson_number === current&&mod).video:'' }
    >
    </video>

    </div>
}

{moduleDetails.length > 0 &&
<div className='flex flex-col gap-[1.5rem] px-[2.25rem] pb-[3.9375rem] bg-[#EFE7F4] w-[27%] text-[#4A4A4A] pt-[2.375rem]'>
        <div className='flex flex-col gap-[3.75rem] font-lato font-[500] text-[1rem] items-start'>
{modules.sort((a, b) => a.id - b.id).map((mod) => <button onClick={() => changeCurrentModule(mod.id)} className='mr-auto text-left'>{mod.title}</button>)}
        </div>
        
        </div>
}

    </div>
  )
}

export default CourseDetails