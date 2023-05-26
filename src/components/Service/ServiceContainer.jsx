import React from 'react'
import Footers from '../footer/Footers'
import NavHead from '../about/Navhead'
import Services from './Services'
import ServicesText from './ServicesText'

const ServiceContainer = () => {
  return (
    <div className='bg-[#F6F6F6]'>
        {/* <NavHead /> */}
        <ServicesText />
        <Services />
        {/* <Footers /> */}
    </div>
  )
}

export default ServiceContainer