import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import bell from "./../../assets/dashboard/bell.png"
import { useAuthContext } from '../../context/auth/auth'
import { FaPenSquare } from "react-icons/fa";
import ReactCrop from 'react-image-crop'
import 'react-image-crop/dist/ReactCrop.css'
import { FaCropSimple } from "react-icons/fa6";
import Rodal from 'rodal';

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
    const [crop, setCrop] = useState({
        unit: '%', // Can be 'px' or '%'
        x: 250,
        y: 250,
        width: 150,
        height: 350
      })
    const {user, profile_pics, change_profile_pics} = useAuthContext()
    const [userprofile, setUserprofile] = useState(profile_pics)
    const [showCrop, setShowCrop] = useState(false)
    const handle__profile_picture = (Picture) => {
        // //(Picture)
        change_profile_pics(Picture)
    }

    // function onImageLoad(e) {
    //     const { naturalWidth: width, naturalHeight: height } = e.currentTarget
      
    //     const crop = centerCrop(
    //       makeAspectCrop(
    //         {
    //           // You don't need to pass a complete crop into
    //           // makeAspectCrop or centerCrop.
    //           unit: '%',
    //           width: 90,
    //         },
    //         16 / 9,
    //         width,
    //         height
    //       ),
    //       width,
    //       height
    //     )
      
    //     setCrop(crop)
    //   }

    //(user)
  return (
    <div className='block md:hidden px-[20px] mb-[56px]'>
        <p className='bg-[#5A0C91] font-[700] text-[1.5rem] font-lato w-full flex justify-center text-[white] py-[20px]'>My Account</p>
        <div>
            <p className='ml-auto w-fit'><img src={bell}  alt="" /></p>

            <div className='bg-[#4A4A4A] py-[56px] flex flex-col justify-center items-center gap-[13px]'>
                <div className='w-[80px] h-[80px] border-[#E9E9E9] border-[1px] rounded-full flex justify-center items-center relative'>
            <div className='rounded-full w-[72px] h-[72px] bg-[#E9E9E9] flex items-center justify-center'>
                <img src={profile_pics} className='bg-center object-center w-full h-full rounded-full'/>
            </div>
             {/* <div className='absolute   h-full text-black   w-full'>
                <label htmlFor="profpics" className=' absolute bottom-0 left-1'>
                </label>
                <input type="file"  placeholder='Upload New' accept="image/*" name='profpics' id='profpics' className='hidden' onChange={(e) => handle__profile_picture(e.target.files[0])}/>
            </div> */}
            </div>
           <Rodal height={'10vh'} customStyles={{
        width: "90%",
        paddingLeft: "0",
        paddingRight: "0",
        paddingTop: "0",
        paddingBottom: "0",
        background: "#F6F6F6",
        height: "90vh",
        overflowY:"scroll",
        maxWidth: "1000px",
        borderRadius: "10px 0px 0px 10px"
        }} onClose = {() => setShowCrop(false)}
        visible={showCrop}>
            <div><ReactCrop className='w-full mx-auto  h-[50%] bg-center bg-gray-300' crop={crop} onChange={c => setCrop(c)} >
      <img src={profile_pics}  className='w-full h-full object-center bg-center'/>
    </ReactCrop></div>
    <button className='bg-[#5A0C91] text-white px-4 py-2 rounded'>Crop</button>
    </Rodal>
            <p className='font-[600] font-lato text-[white] text-[1rem]'>
            {user.username}
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




