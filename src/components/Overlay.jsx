import React from 'react'

const Overlay = (onclick, show) => {
  return (
      show &&(
    <div className='bg-black opacity-[0.7] absolute w-full h-full  zIndex={1}' onClick={onclick} >
    </div>
      )
  )
}

export default Overlay