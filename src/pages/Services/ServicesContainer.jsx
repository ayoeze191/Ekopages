import React from 'react'
import ServiceContainer from '../../components/Service/ServiceContainer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EkoLearn from '../../components/Service/EkoLearn/EkoLearn'
import Ekotales from '../../components/Service/Ekotales/Ekotales'
const ServicesContainer = () => {
  return (
    <Routes>
       <Route  element={<ServiceContainer/>} path={'/'} />
       <Route element={<EkoLearn />} path={'/ekolearn'} />
       <Route element = {<Ekotales/>} path={'/ekotales'} />
    </Routes>
  )
}

export default ServicesContainer