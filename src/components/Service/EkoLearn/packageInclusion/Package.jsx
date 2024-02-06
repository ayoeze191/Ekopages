import React from 'react'
import { useAuthContext } from '../../../../context/auth/auth'
import { useNavigate } from 'react-router-dom'
import instance from '../../../../axios'
import {tokenConfig} from "./../../../../Config/Config"
import { Link } from 'react-router-dom'

const Package = ({image, title, text, btnValue, link, mode}) => {
  const {isAuth} = useAuthContext()
  const navigate = useNavigate()

  const runOnMount = () => {
    instance.get('/dashboard-payment/payment/verify/', tokenConfig())
  } 

  const onClickHandler = () => {
    if(mode == "free" && isAuth ) {
      navigate(`/dashboard/${link}`) 
    }
    // if(mode == "paid" && isAuth) 
  }


  return (
    <div className='flex font-lato gap-[1rem] flex-col'>
        <div> <img src={image} alt="" srcset="" /> </div>
        <div className='text-[13px] md:text-[1.5rem] font-[700]'> {title} </div>
        <div className='font-700 md:text-[1rem] text-[10px]'> {text} </div>
        <Link className='md:py-[0.65625rem] md:px-[1.05rem] px-[9.18px] py-[5.73px]  bg-[#EFA30C] text-[1rem] font-[500] rounded-[5px] w-fit' to={`${link}`}>{btnValue}</Link>
    </div>
  )
}

export default Package