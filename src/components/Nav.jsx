//compoent
import Login from "./login";
import Signup from "./Signup";
import Rodal from 'rodal';
import { Link } from "react-router-dom"
import { AiOutlineSearch, AiOutlineUser, AiOutlineHeart } from "react-icons/ai"
import {BsCart} from "react-icons/bs"

//hooks
import useLogic from "../hooks/Nav";

//context
// import landingPageContext from "../context/landingPageContext"
//asset
import asset from "../assets/NavHeader/export"
// include styles
import 'rodal/lib/rodal.css';




const NavHeader = () => {
    const NavLogicObject = useLogic()

    const arrauOfNavs  = [{
        name: "About Us",
        path:"/about-us"
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

    
    

    return (
        <div className="w-full bg-[#F6F6F6] p-[30px] h-[100px] flex items-center justify-between text-[24px] font-normal font-lato pl-[6%] pr-[6%]">
            <Rodal
                customStyles={{
                width: "600px",
                paddingLeft: "5%",
                paddingRight: "5%",
                paddingTop: "60px",
                minHeight: "80vh",
                paddingBottom: "60px",
                overflowY:"scroll"
            
                }}
                visible={NavLogicObject.state.showLoginModal}
                onClose={NavLogicObject.handleLoginModalVisibility}>
                <Login ></Login>
            </Rodal>

            <Rodal
                customStyles={{
                width: "600px",
                paddingLeft: "5%",
                paddingRight: "5%",
                paddingTop: "60px",
                minHeight: "80vh",
                paddingBottom: "60px",
                overflowY:"scroll"
            
                }}
                visible={NavLogicObject.state.showSignupModal}
                onClose={NavLogicObject.handleSignupModalVisibility}>
                <Signup ></Signup>
            </Rodal>
            <section className="flex items-center justify-around w-[55%]  ">
                <Link to="/" >
                    <img className="mr-[2%] w-[121px] text-[24px] h-[67px]" src={asset.Logo} alt="logo" />

                </Link>

                <div  className="text-[16px] font-lato flex justify-around">

                {
                    arrauOfNavs.map((eachItems) => <Link className="mr-[20px] text-[#303030]" to="/course"  >{eachItems.name}</Link>)
                }
               
                </div>
 </section>
            <section className="flex items-center ">
                <div className="w-[183px] h-[40px] flex bg-[#E4E4E4] rounded-[10px]  pl-[10px] text-[20px] items-center"  >
                    <AiOutlineSearch className=" text-[#888888] w-[21px] h-[22px] mr-[6px] text-[]" ></AiOutlineSearch>
                    <input className="h-full w-[80%] bg-[#E4E4E4] outline-0 text-[12px]" placeholder="Search" type="text" />
                </div>
                {/* <button onClick={()=> NavLogicObject.handleSignupModalVisibility(NavLogicObject.state)}  className="bg-[#EFA30C] text-white rounded-[10px] mr-[5px] ml-[5px] rounded-[10px] font-bold text-[20px] w-[100px] h-[44px] shadow-[0px_4px_4px_0px_#00000040] ">
                    Sign Up
                </button>
                <button onClick={()=> NavLogicObject.handleLoginModalVisibility(NavLogicObject.state)} className="text-[#7D2FB4] rounded-[10px] mr-[5px] ml-[5px] rounded-[10px]  text-[20px] w-[100px] h-[44px] border-[1px] border-[#5A0C91] shadow-[0px_4px_4px_0px_#00000040]">
                    Login
                </button> */}
                <div className="h-[100%] flex items-center justify-around w-[200px] ml-[20px]">
                    <p className="text-[#4A4A4A] text-[16px] ">Hello, Oyin</p>
                    <div className=" relative  w-[40px] h-[40px] bg-[#CCB4DD] rounded-[40px] flex items-center justify-center">
                        <AiOutlineUser></AiOutlineUser>
                        <p className="absolute h-[7px] w-[7px] rounded-[7px] bg-[#03A800] top-[5px] right-[0px]"></p>
                    </div>
                    <AiOutlineHeart></AiOutlineHeart>
                    <BsCart></BsCart>

                </div>
            </section>
        </div>
    )
    

} 

export default NavHeader