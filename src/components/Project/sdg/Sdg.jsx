import React from 'react'
import AllProjects from './OtherProjects/AllProjects'
import Photos from './Photos/Photos'
import Projects from './Projects'

import Sdgtext from './Sdgtext'

const Sdg = () => {
  return (
    <div className='mb-[6.5625rem]'>
        <Sdgtext text={"SDG LITERACY DRIVE"}/>
        <Projects />
        <Photos />
        <AllProjects/>
    </div>
  )
}

export default Sdg