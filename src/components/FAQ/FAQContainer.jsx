import React from 'react'
import NavHead from '../about/Navhead'
import Footers from '../footer/Footers'
import FAD from './FAD'
import Questions from './Questions'
const FAQContainer = () => {
  return (
    <div className='bg-[#F6F6F6]'>
      {/* <NavHead></NavHead> */}
      <FAD />
      <div className='font-lato font-[500] text-[#232323] mt-[24px] text-center md:hidden '>Here are some common questions asked by users about Eko pages</div>
      <Questions />
      {/* <Footers /> */}
    </div>
  )
}

export default FAQContainer