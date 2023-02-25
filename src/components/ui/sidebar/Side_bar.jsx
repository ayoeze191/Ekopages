import React from 'react'
import { items } from './items'
import SideItem from './SideItem'
import { Link } from "react-router-dom"
import { AiOutlineUser,  AiOutlineHeart, AiOutlineSearch} from 'react-icons/ai'
import { BsCart } from 'react-icons/bs'
import Overlay from '../Overlay'
import { useAuthContext } from '../../../context/auth/auth'
const Side_bar = ({show, sideFunc}) => {
  const {isAuth, user} = useAuthContext()
  return (
    <div className=' w-full h-full flex flex-col pt-[80px] pb-[50px] md:hidden w-[80%] h-full w-full bg-white overflow-scroll fixed z-50 left-0 right-0 top-0 bottom-0'
    style={{
      transform:show ? 'translateX(0)' : 'translateX(-1000px)',
      // opacity:show ? '1' : '0',
      transition: "ease-in-out 1s"
  }}
    >

    {/* <Overlay showSmallOnly={true}/> */}

        <div className='flex justify-between px-[1.7rem] items-center mb-[2.5rem]'>
        <div className='flex items-center gap-[0.5rem]'>
        <Link className=" relative  w-[28px] h-[50px] w-[50px] bg-[#CCB4DD] rounded-[40px] flex items-center justify-center cursor-pointer flex" to = {'/dashboard/account'} >
                        <AiOutlineUser></AiOutlineUser>
                    </Link>
                    {isAuth &&<p className="text-[#4A4A4A] text-[0.875rem] lg:text-[1rem] font-[400] ">Hello, {user.username}</p>} 
                    {!isAuth && <p className="text-[#4A4A4A] text-[0.875rem] lg:text-[1rem] font-[400] ">Log in/Sign up</p> }

        </div>
        <div>  <BsCart className='block lg:hidden'></BsCart></div>

        </div>
      <div className='px-[1.7rem] mb-[26px] w-full'>
        <div className=' rounded-[10px] bg-[#F4F4F4] flex gap-[3.99px] w-full w-fit h-full px-[23px] py-[11px] items-center'>
            <AiOutlineSearch />
            <input type="text" placeholder='Search' className='bg-[#F4F4F4] text-[1rem] font-[400] outline-none w-full'/>
        </div>
        </div>

        <div className='bg-white px-[1.7rem] text-black flex flex-col gap-[2rem] mb-[66px]'>
            
      {items.map(item => <SideItem {...item} sidefunctions={sideFunc}/>)}

        </div>

        <div className=' bg-[#5A0C91] text-[#FFFFFF] py-[20px] px-[2.5rem] '>
        Log Out
        </div>
    </div>
  )
}

export default Side_bar