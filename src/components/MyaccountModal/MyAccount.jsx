import React from 'react'
import { Link } from 'react-router-dom'
import bell from "./../../assets/dashboard/bell.png"
const dashElement = [
    {
        name: "Dashboard",
        logo: "",
        path: "/dashboard"
    },
    {
        name: "My Courses",
        logo: "",
        path: "/dashboard/MyCourses"   
    },
    {
        name: "My Orders",
        logo: "",
        path: "/dashboard/orders"   
    },{
        name: "Settings",
        logo: "",
        path: "/dashboard/settings"   
    },
] 

const NavItem = ({logo, name, path}) => {
    return(
            <Link className='py-[30px] flex gap-[16px] pl-[16px] text-[1rem] font-[400] font-lato border-[1px] border-solid border-[#DEDEDE]' to={`${path}`}>
            <div>
            <img src={logo} alt="" />
            </div>
            <p>
                {name}
            </p>
        </Link>
    )
}




const MyAccount = () => {
  return (
    <div className='block md:hidden px-[20px] mb-[56px]'>
        <p className='bg-[#5A0C91] font-[700] text-[1.5rem] font-lato w-full flex justify-center text-[white] py-[20px]'>My Account</p>

        <div>
            <p className='ml-auto w-fit'><img src={bell} alt="" /></p>

            <div className='bg-[#4A4A4A] py-[56px] flex flex-col justify-center items-center gap-[13px]'>
                <div className='w-[80px] h-[80px] border-[#E9E9E9] border-[1px] rounded-full flex justify-center items-center'>
            <div className='rounded-full w-[72px] h-[72px] bg-[#E9E9E9]'>

            </div>
            </div>
            <p className='font-[600] font-lato text-[white] text-[1rem]'>
            Oyindamola Ahmed
            </p>
            </div>

            <div className='border-[1px] border-solid border-[#DEDEDE]'>
                {dashElement.map((ele) => <NavItem {...ele}/>)}
            </div>
        </div>
    </div>
  )
}

export default MyAccount




