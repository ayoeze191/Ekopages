import React from 'react'
import { ClipLoader, MoonLoader } from 'react-spinners'


const GeneralUiOverlay = () => {
  return (
    <div className='bg-black opacity-70 h-full w-full fixed z-10 top-0 left-0 flex items-center justify-center'>
        <ClipLoader color='white'></ClipLoader>
    </div>
  )
}

export default GeneralUiOverlay