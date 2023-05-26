import React from 'react'

const Overlay = (props) => {
  return (
    props.showSmallOnly &&
    <div className="bg-black opacity-70 h-full w-full fixed  md:hidden z-10" onClick={() => props.remove()}>
    </div>
  )
}

export default Overlay