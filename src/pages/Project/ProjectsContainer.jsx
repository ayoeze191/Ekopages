import React, {useEffect} from 'react'
import ProjectContainer from '../../components/Project/ProjectContainer'
import { Route, Routes } from 'react-router-dom'
import Sdg from '../../components/Project/sdg/Sdg'
import SdgArt from '../../components/Project/SdgArt/SdgArt'

import TeachHer from '../../components/Project/TeachHer/TeachHer'
const ProjectsContainer = () => {
  const loc = window.location

  useEffect(() => {
      window.scrollTo(0, 0);

  }, [ loc]);
  return (
    <div>
        <Routes>
          <Route element={<ProjectContainer />} path="/"/>
          <Route element = {<Sdg />} path='/sdg' />
          <Route element = {<SdgArt />}path='/sdgart' />
          <Route element = {<TeachHer />}path='/theteach' />

        </Routes>
    </div>
  )
}

export default ProjectsContainer