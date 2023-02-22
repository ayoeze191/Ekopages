import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom'



const SideItem = ({text, path, sidefunctions}) => {
  const nav = useNavigate()
  const navigate = () => {
      // <Navigate to={path} />
      nav(path)
      sidefunctions()
  }


  return (
      <div className='text-[1rem] font-lato text-[#303030] font-[700] text-[#303030] px-2 cursor-pointer' to={path} onClick={() => navigate()}>
{text}
      </div>
  )
}

export default SideItem