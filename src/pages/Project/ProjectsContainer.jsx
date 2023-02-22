import React from 'react'
import ProjectContainer from '../../components/Project/ProjectContainer'
import { Route, Routes } from 'react-router-dom'
import Sdg from '../../components/Project/sdg/Sdg'
const ProjectsContainer = () => {
  return (
    <div>
        <Routes>
          <Route element={<ProjectContainer />} path="/"/>
          <Route element = {<Sdg />} path='/sdg' />
        </Routes>
    </div>
  )
}

export default ProjectsContainer