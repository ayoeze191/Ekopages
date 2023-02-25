import React from 'react'

//compoent
import Login from "../login";
import Signup from "../Signup";
import Rodal from 'rodal';
import { Link } from "react-router-dom"
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
import { Overlay } from 'antd/es/popconfirm/PurePanel';
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Side_bar from '../ui/sidebar/Side_bar';
import { useState } from 'react';


const NavHead = ({sideHandler}) => {
    const loc = useLocation()
    const [side, setside] = useState(false)
    const NavLogicObject = useLogic()
    const {isAuth, access, user, showLoginModal, setloginMode, loading} = useAuthContext()
    console.log(user)
    // console.log(isAuth, "authentication")
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
            name: "FAQs",
            path:"faq"
    }
    ]

    // localStorage.removeItem('access')
    
    const onsetSidebar = (open) => {
        console.log("setting")
        // setside(open)
    }

    return (
        // <div className='bg-[#F6F6F6] w-full'>
    <div className="headersection w-full  flex items-center justify-between text-[24px] font-normal font-lato relative">

{/* <Sidebar
  sidebar={<Side_bar /> }
  open={true}
  transitions={true}
  onSetOpen={onsetSidebar}
  styles={{ sidebar: { background: "white", height:"100vh", width:"100%" , position:"fixed", overflowY:"scroll"} }}
  docked={false}
  shadow={false}
/> */}
{/* <Side_bar show={true}/> */}



            <Rodal
                customStyles={{
                width: "90%",
                paddingLeft: "0",
                paddingRight: "0",
                paddingTop: "0",
                paddingBottom: "0",
                background: "#F6F6F6",
                height: "90vh",
                overflowY:"scroll",
                maxWidth: "1000px",
                
                // background : "bg-[#F6F6F6]"
                }}
                
                visible={showLoginModal}
                onClose={setloginMode}> 

            <Login></Login>
            
            </Rodal>
            

            <Rodal
                customStyles={{
                    width: "90%",
                    paddingLeft: "0",
                    paddingRight: "0",
                    paddingTop: "0",
                    height: "90vh",
                    paddingBottom: "0",
                    background: "#F6F6F6",
                    overflowY:"scroll",
                    maxWidth: "1000px",
                
                    }}
                visible={NavLogicObject.state.showSignupModal}
                onClose={NavLogicObject.handleSignupModalVisibility}>
                <Signup ></Signup>
            </Rodal>

                    <button className='lg:hidden' onClick={() => sideHandler() }>
                        <div><img src={menu} alt="" /></div>
                    </button>


            <section className="flex items-center w-fit mx-auto lg:mx-0">
                <Link to="/" className='className="w-[70px] h-[38.89px] lg:w-[121px] text-[24px] lg:h-[67px]"'>
                    <img  src={asset.Logo} alt="logo" className='w-full h-full'/>
                </Link>
 </section>

                <section className='hidden lg:block'>
                <div  className="text-[16px] font-lato flex justify-between gap-[20px]">

{
    arrauOfNavs.map((eachItems) => <Link className=" text-[#303030]" to={eachItems.path}  >{eachItems.name}</Link>)
}

</div>
                </section>

            <section className="flex items-center lg:gap-[1rem]">
                <div className="bg-[#E4E4E4] rounded-[10px] text-[20px] items-center py-[0.8125rem] px-[1.18rem] hidden lg:flex"  >
                    <AiOutlineSearch className=" text-[#888888] mr-[6px]" width={'1rem'} height={"14.4px"}></AiOutlineSearch>
                    <input className="h-full bg-[#E4E4E4] outline-0 text-[12px]" placeholder="Search" type="text" />
                </div>
                {!isAuth&& <><button onClick={()=> NavLogicObject.handleSignupModalVisibility(NavLogicObject.state)}  className=" bg-[#5A0C91] text-white rounded-[5px] font-lato text-[1rem] font-[500] lg:w-[7.5rem] w-[5.75rem]  h-[2.187rem] lg:h-[2.5rem] ">
                    Sign Up
                </button>
                <button onClick={()=> setloginMode()} className="hidden lg:block bg-inherit border-[solid] border  border-[#5A0C91] text-[#5A0C91] rounded-[5px] font-lato text-[1rem] font-[500] w-[7.5rem] h-[2.5rem]">
                    Log In
                </button> </> }
            </section>
            
            <section className=' items-center justify-between gap-[1rem] flex flex-0'>
            
                 {isAuth && <>                      <p className="text-[#4A4A4A] text-[0.875rem] lg:text-[1rem] font-[400] ">hello {user.username}</p> 
                    <Link className=" relative  w-[28px] h-[28px] lg:w-[40px] lg:h-[40px] bg-[#CCB4DD] rounded-full flex items-center justify-center cursor-pointer flex" to = {'/dashboard'} >
                        <AiOutlineUser></AiOutlineUser>
                        <p className="absolute h-[7px] w-[7px] rounded-[7px] bg-[#03A800] top-[5px] right-[0px]"></p>
                    </Link>
                    <AiOutlineHeart className='hidden lg:flex'></AiOutlineHeart>
                    </>
}       
                    
                  <div>  <BsCart className='hidden lg:block'></BsCart></div>
            </section>


        </div>
        // </div>
    )
    

} 

export default NavHead