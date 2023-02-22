import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Courses from '../../Courses';
import Orders from './Orders';
import bell from "./../../../../assets/dashboard/bell.png";
import clarity_certificate_line from "./../../../../assets/dashboard/clarity_certificate_line.png"
const Dashboard = () => {
  return (
    <div  className='px-[3.625rem] py-[3rem] flex-1 border-solid border-[#CDCDCD] border-[1px] border-l-none h-[100%] flex flex-col'>
        <div className='flex justify-between py-0 mb-[71px]'><p className='font-lato text-[2rem] font-[500]'>Welcome back, Oyin</p> <div><img src={bell} alt="" srcset="" /></div></div>
        <div className='flex flex-col gap-[38px]'>
        <div className='flex gap-[1.11125rem]'>
        <div className='flex items-center gap-[17.9px] py-0'><div className=''> <img src={clarity_certificate_line} alt="" /></div></div> <p className='text-[1.5rem] font-[500] font-lato'>My Courses</p>
        </div>
        <Courses />
        <Orders />
        </div>
    </div>
  )
}

export default Dashboard