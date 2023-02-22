import React from 'react'
import EkoLearnAbout from './EkoLearnAbout/EkoLearnAbout'
import EkoLearntext from './EkoLearntext'
import OtherService from './OtherService/OtherService'
import PackageInclusion from './packageInclusion/PackageInclusion'

const EkoLearn = () => {
  return (
    <div className=''>
        <EkoLearntext text={"Eko Learn"}/>
        <EkoLearnAbout />
        <PackageInclusion />
        <OtherService />
    </div>
  )
}

export default EkoLearn