import React from 'react'

const Overlay = (onclick, show) => {
  return (
      show &&(
    <div className='bg-black opacity-[0.7] absolute w-full h-full top-0 fixed' onClick={onclick} >
    </div>
      )
  )
}

export default Overlay