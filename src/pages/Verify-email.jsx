import React from 'react'
import { useEffect, useState } from 'react'
import { useRef } from 'react'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useAuthContext } from '../context/auth/auth';
import instance from "./../axios.js"
import { BarLoader } from 'react-spinners'

const VerifyEmail = () => {
    const {token} = useParams()
    const [isloading, setIsloading] = useState(true)
    const [success, seSuccess] = useState(false)
    const [failed, setFailed] = useState(false)

    const verifyEmail = (token) => {

      instance.post("registration/verify-email/", {key: token})
      .then((res) => {
        console.log(res.data)
        setIsloading(false)
        seSuccess(true)
      })
      .catch((err) => {
        setIsloading(false)
        setFailed(true)
      })
    }
   
  useEffect(() => {
    verifyEmail(token)
  }, [])  
  
  return (
    <div>
        {isloading?
        <div>
            <BarLoader color='#5A0C91'/>
          <p> Please wait while we verify Your email</p></div>
        :success?"verification sucessfull you can proceed to login":failed?"couldn't verify":null}
    </div>
  )
}

export default VerifyEmail