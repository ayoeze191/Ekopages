import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import History from './History'
import Introduction from './Introduction'
import MDGs from './MDGs'
import Objective from './Objective'
import SDGs from './SDGs'

const CourseDetails = () => {
    const [status, setStatus] = useState({
        introduction: false,
        history: false,
        objective: false,
        mdgs: false,
        sdg: true
    })
    

  return (
    <div className='flex px-[2.06rem] pb-[3.75rem] pt-[4.0rem] font-lato gap-[2rem]'>

   { status.introduction && <Introduction />}
    {status.history && <History />}
{ status.objective && <Objective /> }
    {status.mdgs && <MDGs /> }
    <SDGs />

<div className='flex flex-col gap-[1.5rem] px-[2.25rem] pb-[3.9375rem] bg-[#EFE7F4] w-[27%] text-[#4A4A4A] pt-[2.375rem]'>
        <div className='flex flex-col gap-[3.75rem] font-lato font-[500] text-[1rem]'>
<Link>Introduction to the SDGs</Link>
<Link>History of the SDGs</Link>
<Link>Objectives of the SDGs</Link>
<Link> POP Quiz </Link>
<Link>The Millennium Development Goals</Link>
<Link>POP Quiz</Link>
<Link>The Sustainable  Development Goals</Link>
<Link>Literature story and Questions</Link>
<Link>Importance of  the SDGs</Link>
<Link>Literature story and Questions</Link>
        </div>
        </div>
    </div>
  )
}

export default CourseDetails