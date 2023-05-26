import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import EkoNewsContainer from '../../components/EkoNews/EkoNewsContainer'
import EkoNewsDetails from '../../components/EkoNews/EkoNewsDetails'

// component: <SdgContainer />
const EkoNewsContain = () => {
  return (
    <Routes>
      <Route element={<EkoNewsContainer />} path='/'/>
      <Route element= {<EkoNewsDetails />} path='/:id'/>
    </Routes>
  )
}

export default EkoNewsContain