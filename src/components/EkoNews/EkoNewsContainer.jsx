import React from 'react'
import NavHead from '../about/Navhead'
import Footers from '../footer/Footers'
import Browse from './Browse'
import EkoNewsAbout from './EkoNewsAbout'
import EkoText from './EkoNewsText'
import News from './News'

const EkoNewsContainer = () => {
  return (
    <div className='bg-[#F6F6F6]'>
        {/* <NavHead /> */}
        <EkoText />
        <EkoNewsAbout/>
        <Browse />
        <News />
        {/* <Footers /> */}
    </div>
  )
}

export default EkoNewsContainer