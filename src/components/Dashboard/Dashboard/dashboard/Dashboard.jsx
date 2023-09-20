import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Courses from '../../Courses';
import Orders from './Orders';
import bell from "./../../../../assets/dashboard/bell.png";
import clarity_certificate_line from "./../../../../assets/dashboard/clarity_certificate_line.png"
import { useAuthContext } from '../../../../context/auth/auth';
const Dashboard = () => {
  const {user} = useAuthContext()
  // //(user)
  return (
    <div  className='px-[1.5rem] md:px-[3.625rem] py-[3rem] flex-1 border-solid border-[#CDCDCD] border-[1px] border-l-none h-[100%] flex flex-col'>
        <div className='flex md:justify-between py-0 mb-[1rem] md:mb-[71px] item-center'><p className='font-lato text-[20px] md:text-[2rem] font-[700] md:font-[500] text-center flex-1 md:flex-0'>Welcome back, {user.username}</p> <div><img src={bell} alt="" srcset="" /></div></div>
        <div className='flex flex-col gap-[38px]'>
        <div className='flex gap-[1.11125rem] mx-auto md:mx-[initial]'>
        <div className='flex items-center gap-[17.9px] py-0 font-lato'><div className=''> <img src={clarity_certificate_line} alt="" /></div></div> <p className='text-[1.5rem] font-[500] font-lato text-center md:text-left' >My Courses</p>
        </div>
        <Courses />
        <Orders />
        </div>
    </div>
  )
}

export default Dashboard