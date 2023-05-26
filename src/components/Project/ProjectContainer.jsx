import React from 'react'
import Footers from '../footer/Footers'
import NavHead from '../about/Navhead'
import Projects from './Projects'
import ProjectText from './ProjectText'

const ProjectContainer = () => {
  return (
    <div>
        {/* <NavHead /> */}
        <ProjectText />
        <Projects />
        {/* <Footers /> */}
    </div>
  )
}

export default ProjectContainer