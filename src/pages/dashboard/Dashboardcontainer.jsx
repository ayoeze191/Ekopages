import React from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import CourseDetails from '../../components/Dashboard/Dashboard/CourseDetail/CourseDetails'
import Dashboard from '../../components/Dashboard/Dashboard/dashboard/Dashboard'
import OrderContainer from '../../components/Dashboard/Dashboard/Order/OrderContainer'
import Orders from '../../components/Dashboard/Dashboard/Order/Orders'
// import Orders from '../../components/Dashboard/Dashboard/Order/OrdersPending'
import Settings from '../../components/settings/Settings'
import Sidebar from './sidebar/Sidebar'

const Dashboardcontainer = () => {
  return (
    <div className='flex bg-inherit h-full relative'>
      <div className='w-[25%]'>
        <Sidebar />
        </div>
        <div className='flex-1'>
        <Routes>
        <Route element={<Dashboard />} path='/' />
        <Route element={<Settings />} path="/settings" />
        <Route element={<OrderContainer />} path='/orders/*' />
        <Route element={<CourseDetails />} path = {"/course/:id"} />         </Routes>
        </div>
    </div>
  )
}

export default Dashboardcontainer