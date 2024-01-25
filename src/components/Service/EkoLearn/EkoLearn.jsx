import React, {useEffect} from 'react'
import EkoLearnAbout from './EkoLearnAbout/EkoLearnAbout'
import EkoLearntext from './EkoLearntext'
import OtherService from './OtherService/OtherService'
import PackageInclusion from './packageInclusion/PackageInclusion'

const EkoLearn = () => {
  const loc = window.location

  useEffect(() => {
    window.scrollTo(0, 0);

}, [ loc]);
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