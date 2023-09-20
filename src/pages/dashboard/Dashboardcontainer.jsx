import React, { useEffect } from 'react'
import { Route, redirect, useNavigate } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import CourseDetails from '../../components/Dashboard/Dashboard/CourseDetail/CourseDetails'
import Dashboard from '../../components/Dashboard/Dashboard/dashboard/Dashboard'
import OrderContainer from '../../components/Dashboard/Dashboard/Order/OrderContainer'
import Orders from '../../components/Dashboard/Dashboard/Order/Orders'
import MyAccount from '../../components/MyaccountModal/MyAccount'
// import Orders from '../../components/Dashboard/Dashboard/Order/OrdersPending'
import Settings from '../../components/settings/Settings'
import Sidebar from './sidebar/Sidebar'
import { useAuthContext } from '../../context/auth/auth'

const Dashboardcontainer = () => {
  const {isAuth} = useAuthContext()
  const navigate = useNavigate()
    if(!isAuth){
      navigate('/')
      //("redirecting")
    }


  return (
    <div className='flex bg-inherit h-full relative'>
      <div className='md:w-[25%]'>
        <Sidebar />
        </div>
        <div className='flex-1'>
        <Routes>
        <Route element={<Dashboard />} path='/' />
        <Route element={<Settings />} path="/settings" />
        <Route element={<OrderContainer />} path='/orders/*' />
        <Route element={<CourseDetails />} path = {"/course/:id"} />
        <Route element={<MyAccount />} path="/account" />         </Routes>
        </div>
    </div>
  )
}

export default Dashboardcontainer