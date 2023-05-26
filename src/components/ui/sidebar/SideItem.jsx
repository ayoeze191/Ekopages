import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../../context/auth/auth'
import {useModalContext} from "./../../../context/modal/modal"


const SideItem = ({text, path, sidefunctions}) => {
  const {setpartnerModal} = useModalContext()
  // const {logout} = useAuthContext()
  const nav = useNavigate()
  const navigate = () => {
      //(path)
      // <Navigate to={path} />
      if (path==="/BeacomeaPartner") {
        //("becoming")
        return setpartnerModal()
      }

      nav(path)

      sidefunctions()
  }


  return (
      <div className='text-[1rem] font-lato text-[#303030] font-[700] text-[#303030] px-2 cursor-pointer' onClick={() => navigate()}>
{text}
      </div>
  )
}

export default SideItem