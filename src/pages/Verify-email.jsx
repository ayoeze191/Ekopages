import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useAuthContext } from '../context/auth/auth'

const VerifyEmail = () => {
    const location = useLocation()
    const {token} = useParams()
    const {verifyEmail, isAuth} = useAuthContext() 

  // console.log(token)
  useEffect(() => {
    verifyEmail(token)
  })  

  if(isAuth) 
  
  return (
    <div>
      
    </div>
  )
}

export default VerifyEmail