import React from 'react'
import SdgIntroductionHeader from './sdgIntroductionHeader'

const SdgCourseWrapper = ({children}) => {
  return (
    <div className='font-lato flex gap-[1.5rem] flex-col flex-1'>
        <SdgIntroductionHeader />
        {children}
    </div>
  )
}

export default SdgCourseWrapper