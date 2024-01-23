import React, {useEffect} from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import EkoNewsContainer from '../../components/EkoNews/EkoNewsContainer'
import EkoNewsDetails from '../../components/EkoNews/EkoNewsDetails'

// component: <SdgContainer />
const EkoNewsContain = () => {
  const loc = window.location

  useEffect(() => {
      window.scrollTo(0, 0);

  }, [ loc]);
  return (
    <Routes>
      <Route element={<EkoNewsContainer />} path='/'/>
      <Route element= {<EkoNewsDetails />} path='/:id'/>
    </Routes>
  )
}

export default EkoNewsContain