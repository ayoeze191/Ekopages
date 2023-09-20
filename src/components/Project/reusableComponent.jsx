import React from 'react'
import { projects } from './Projects'
import SingleProject from './sdg/OtherProjects/SingleProject'

const ReusableComponent = ({filter}) => {
  return (
    <div className='w-full  mx-auto px-10 lg:px-0 max-w-[77rem] flex flex-col items-start md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-[2rem] mb-[11.1rem] gap-y-[4rem] align-middle '>
        {
            projects.filter(project => project.path !== filter).map((proj) => < SingleProject {...proj} />)
        }
    </div>
  )
}

export default ReusableComponent