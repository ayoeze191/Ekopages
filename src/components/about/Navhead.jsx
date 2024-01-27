import React from 'react'

//compoent
import Login from "../login";
import Signup from "../Signup";
import Rodal from 'rodal';
import { Link, NavLink } from "react-router-dom"
import { AiOutlineSearch, AiOutlineUser, AiOutlineHeart } from "react-icons/ai"
import {BsCart} from "react-icons/bs"
import menu from "./../../assets/menu.png"
//hooks
import Sidebar from "react-sidebar";
import useLogic from "../../hooks/Nav";

//context
// import landingPageContext from "../context/landingPageContext"
//asset
import asset from "../../assets/NavHeader/export"
// include styles
import 'rodal/lib/rodal.css';
import { useAuthContext } from '../../context/auth/auth';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';



import { get_cart } from '../../store/Actions/Cart';
import { useContext } from 'react';
import { cookieContext } from '../../App';
import { useModalContext } from '../../context/modal/modal';
import AccountSuccesfullyCreated from '../ui/Modal/AccountSuccesfullyCreated';
import { useSignupContext } from '../../context/auth/signup';

const NavHead = ({sideHandler}) => {
    const {loginModal, setLoginModal, signupModal, setSignupModal} = useModalContext()
    const {accountSuccessfullycreatedModal, setaccountSuccessfullycreatedModal} = useSignupContext()

    const NavLogicObject = useLogic()
    const {isAuth,user, change_profile_pics, profpics, profile_pics} = useAuthContext()
    const {cookie} = useContext(cookieContext)
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart.cart)
    // //(isAuth, "authentication")
    const arrauOfNavs  = [{
        name: "About Us",
        path:"/about"
    },
    {
        name: "Projects",
        path:"/projects"
    },
    {
            name: "Services",
            path:"services"
    },
    {
            name: "Eko Store",
            path:"/ekostore"
    },
    {
            name: "Eko News",
            path:"/ekonews"
        },
        {
            name: "Be a Publisher",
            path: "/beapublisher"
        }
    ]
    

    useEffect(() => {
        dispatch(get_cart({
            isAuth,
            session_id: cookie
        }))
    }, [])


    return (
        // <div className='bg-[#F6F6F6] w-full'>
    <div className="headersection w-full  flex items-center justify-between text-[24px] font-normal font-lato relative">
            <Rodal
                customStyles={{
                width: "90%",
                paddingLeft: "0",
                paddingRight: "0",
                paddingTop: "0",
                paddingBottom: "0",
                background: "#F6F6F6",
                overflowY:"hidden",
                height: "fit-content",
                maxWidth: "1000px",
                }}
                visible={loginModal}
                onClose={setLoginModal}
                >
            <Login></Login>
            </Rodal>
            <Rodal
                customStyles={{
                width: "90%",
                paddingLeft: "0",
                paddingRight: "0",
                paddingTop: "0",
                paddingBottom: "0",
                background: "#F6F6F6",
                height: "fit-content",
                overflowY:"scroll",
                maxWidth: "1000px",
                }}
                
                
                visible={accountSuccessfullycreatedModal}
                onClose={setaccountSuccessfullycreatedModal}
                >
            <AccountSuccesfullyCreated />
            </Rodal>
            <Rodal
                customStyles={{
                    width: "90%",
                    paddingLeft: "0",
                    paddingRight: "0",
                    paddingTop: "0",
                    paddingBottom: "0",
                    background: "#F6F6F6",
                    overflowY:"hidden",
                    height: "fit-content",
                    maxWidth: "1000px",
                    }}
                visible={signupModal}
                onClose={setSignupModal}>
                <Signup ></Signup>
            </Rodal>

                    <button className='lg:hidden' onClick={() => sideHandler() }>
                        <div><img src={menu} alt="" /></div>
                    </button>

            <section className="flex items-center w-fit mx-auto lg:mx-0">
                <Link to="/" className='className="w-[60px] h-[30.89px] lg:w-[121px] text-[24px] lg:h-[67px]"'>
                    <img  src={asset.Logo} alt="logo" className='w-full h-full'/>
                </Link>
 </section>
                <section className='hidden lg:block'>
                <div  className="text-[16px] font-lato flex justify-between gap-[20px]">

{
    arrauOfNavs.map((eachItems) => <NavLink style={(props) => props.isActive ? {color: '#5A0C91', fontWeight: 600}:null}  className=" text-[#303030]" to={eachItems.path}  >{eachItems.name}</NavLink>)
}

</div>
                </section>

            <section className="flex items-center lg:gap-[1rem]">
                <div className="bg-[#E4E4E4] rounded-[10px] text-[20px] items-center py-[0.8125rem] px-[1.18rem] hidden lg:flex"  >
                    <AiOutlineSearch className=" text-[#888888] mr-[6px]" width={'1rem'} height={"14.4px"}></AiOutlineSearch>
                    <input className="h-full bg-[#E4E4E4] outline-0 text-[12px]" placeholder="Search" type="text" />
                </div>
                {!isAuth&& <><button onClick={()=> setSignupModal(NavLogicObject.state)}  className=" bg-[#5A0C91] text-white rounded-[5px] font-lato text-[1rem] font-[500] lg:w-[7.5rem] w-[5.75rem]  h-[2.187rem] lg:h-[2.5rem] ">
                    Sign Up
                </button>
                <button onClick={()=> setLoginModal()} className="hidden lg:block bg-inherit border-[solid] border  border-[#5A0C91] text-[#5A0C91] rounded-[5px] font-lato text-[1rem] font-[500] w-[7.5rem] h-[2.5rem]">
                    Log In
                </button> </> }
            </section>
            
            <section className=' items-center justify-between gap-[1rem] flex flex-0'>
            
                 {isAuth && <>                      <p className="text-[#4A4A4A] text-[0.875rem] lg:text-[1rem] font-[400] ">hello {user.username}</p> 
                    <Link className="hidden  relative  w-[28px] h-[28px] lg:w-[40px] lg:h-[40px] bg-[#CCB4DD] rounded-full md:flex items-center justify-center cursor-pointer flex" to = {'/dashboard'} >
                        {/* <AiOutlineUser></AiOutlineUser> */}
                        <img src={profile_pics} className='object-center bg-center'/>
                        <p className="absolute h-[7px] w-[7px] rounded-[7px] bg-[#03A800] top-[5px] right-[0px]"></p>
                    </Link>
                    <Link className=" relative  w-[28px] h-[28px] lg:w-[40px] lg:h-[40px] bg-[#CCB4DD] rounded-full flex md:hidden items-center justify-center cursor-pointer flex" to = {'/dashboard/account'} >
                    <img src={profile_pics} className='object-center bg-center'/>
                        <p className="absolute h-[7px] w-[7px] rounded-[7px] bg-[#03A800] top-[5px] right-[0px]"></p>
                    </Link>
                    <AiOutlineHeart className='hidden lg:flex'></AiOutlineHeart>
                    </>
}                   
                  <Link to={'/cart'}>   <BsCart className='hidden lg:block'></BsCart></Link>
            </section>


        </div>
        // </div>
    )
    

} 

export default NavHead