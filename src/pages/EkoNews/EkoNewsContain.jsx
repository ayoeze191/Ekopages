import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import EkoNewsContainer from '../../components/EkoNews/EkoNewsContainer'
import SdgContainer from '../sdg/SdgContainer'

// component: <SdgContainer />
const EkoNewsContain = () => {
  return (
    <Routes>
      <Route element={<EkoNewsContainer />} path='/'/>
      <Route element= {<SdgContainer />} path='/sdg'/>
    </Routes>
  )
}

export default EkoNewsContain