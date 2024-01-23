import React, {useEffect} from 'react'
import ServiceContainer from '../../components/Service/ServiceContainer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EkoLearn from '../../components/Service/EkoLearn/EkoLearn'
import Ekotales from '../../components/Service/Ekotales/Ekotales'
import EkoTalesDetails from '../../components/Service/Ekotales/Ekotalesdetails'
const ServicesContainer = () => {
  const loc = window.location

  useEffect(() => {
      window.scrollTo(0, 0);

  }, [ loc]);
  return (
    <Routes>
       <Route  element={<ServiceContainer/>} path={'/'} />
       <Route element={<EkoLearn />} path={'/ekolearn'} />
       <Route element = {<Ekotales/>} path={'/ekotales'} />
       <Route element={<EkoTalesDetails />} path='/ekotales/details/:id' />
    </Routes>
  )
}

export default ServicesContainer