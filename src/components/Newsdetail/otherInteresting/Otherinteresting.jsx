import React from 'react'
import { useLocation } from 'react-router-dom'
import { details } from '../../EkoNews/News'
import SingleNews from '../../EkoNews/SingleNews'
const Otherinteresting = () => {
    const location = useLocation()
    console.log(location.pathname)
    const li = details.filter((detail) => detail.path !== location.pathname)
    console.log(li)
  return (
    <div className='section flex flex-col gap-[6rem]'>
        {details.filter((detail) => detail.path !== location.pathname).map((post) => <SingleNews {...post}/>)}
    </div>
  )
}

export default Otherinteresting
