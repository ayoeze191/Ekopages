import React from 'react'
import clarity_certificate_line from "./../../../assets/dashboard/clarity_certificate_line.png"
import dashboard from "./../../../assets/dashboard/dashboard.png"
import clarity_shopping_cart_line from "./../../../assets/dashboard/clarity_shopping_cart_line.png"
import clarity_settings_line from "./../../../assets/dashboard/clarity_settings_line.png";
import SideItem from './SideItem';
import {AiOutlineShoppingCart} from "react-icons/ai"
import { FiSettings } from "react-icons/fi"
import { RxDashboard } from "react-icons/rx"
import {TbCertificate} from "react-icons/tb"
import { useLocation } from 'react-router-dom';
import { useAuthContext } from '../../../context/auth/auth';




const Sidebar = () => {
  const loc = useLocation()
  const {logout} = useAuthContext()



const sidedetails = [
  {
    img: <RxDashboard />,
    url: '',
    text: "Dashboard",
    check : loc.pathname=="/dashboard"?true:false
  },
  {
    img: <TbCertificate />,
    url: 'MyCourses',
    text: "My Courses",
    check : loc.pathname=="/dashboard/MyCourses"?true:false
  },
  {
    img: <AiOutlineShoppingCart />,
    url: 'orders',
    text: "My Orders",
    check : loc.pathname=="/dashboard/orders"?true:false
  },
  {
    img: <FiSettings />,
    url: 'settings',
    text: "Settings",
    check : loc.pathname=="/dashboard/settings"?true:false
  },
]

//(loc.pathname)
  // const loc = useLocation()
  // //()
  return (
    <div className='hidden md:flex flex-col gap-[2.5rem] py-[2.5rem] border-r-solid border-[#CDCDCD] border-r-[1px] border-t-[solid] border-t-[1px] w-full h-full'>
        {sidedetails.map((item) => <SideItem {...item}/>)}
    </div>
  )
}

export default Sidebar