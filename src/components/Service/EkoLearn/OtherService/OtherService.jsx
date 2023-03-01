import React from 'react'
import { useLocation } from 'react-router-dom'
import { service } from '../../Services'
import Service from './Service'
const OtherService = () => {
  const loc = useLocation()
  //(loc.pathname)
  return (
    <div className='font-lato flex w-full mt-[8rem] mx-auto lg:px-0 px-6 max-w-[77rem] flex-col mb-[59.03px]'>
      <p className='font-[700] md:font-[500] text-[1.5rem] md:text-[36px] text-center mb-[42.96px]'>Check out other services</p>
      <div className='flex gap-[40px] max-w-[53rem] mx-auto flex-col md:flex-row'>
        {service.filter(a => `/services/${a.url}` !== loc.pathname ).map(ser => <Service {...ser}/>)}
        </div>
    </div>
  )
}
export default OtherService