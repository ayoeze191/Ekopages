import React, {useEffect} from 'react'

const Beapublisher = () => {
  const loc = window.location

  useEffect(() => {
      window.scrollTo(0, 0);

  }, [ loc]);
  return (
    <div className='text-[#5A0C91] text-6xl font-Poppins text-center font-bold min-h-[50vh] flex justify-center items-center'>
      Coming Soon
    </div>
  )
}

export default Beapublisher