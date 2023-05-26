import React from 'react'
import Sdg from './Sdg/Sdg'

import { sdg } from './Sdg/Sds'
import SdgCourseWrapper from './SdgIntroductionHeader.jsx/sdgCourseWrapper'


const SDGs = () => {
  return (
    <SdgCourseWrapper>
        
        {sdg.map((s) => <Sdg {...s}/>)}
    </SdgCourseWrapper>
  )
}

export default SDGs