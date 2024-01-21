import React from 'react'
import Logo from "./../../assets/about/Logo.png";
import instagram from "./../../assets/about/instagram.png"
import twitter from "./../../assets/about/twitter.png"
import linkedln from "./../../assets/about/linkedln.png"
import facebook from "./../../assets/about/facebook.png"
import Subscribe from '../about/subscribe/Subscribe';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useModalContext } from '../../context/modal/modal';

const NavItem = ({to, name, openModal}) => {
    const navigate = useNavigate()
    const handleClick = () => {
        if(to){
            navigate(to)
        }
        if(openModal){
            openModal()
        }
    }
   

 return  <div className='cursor-pointer' onClick={handleClick}>{name}</div>
}




const Footers = () => {

    const {setpartnerModal} = useModalContext()
    const linkVal = [
        {
            name: "Eko News",
            to: "/ekonews"
        },
        {
            name: "Become a Partner",
            to: "",
            openModal: setpartnerModal
        },
        {
            name: "Contact Us",
            to: "/contact"
        },
        {
            name: "FAQs",
            to: "/faq"
        }
    ]
    const linkVal2 = [
        {
            name: "About us",
            to: "/about"
        },
        {
            name: "Projects",
            to: "/projects"
        },
        {
            name: "Services",
            to: "/services"
        },
        {
            name: "Eko Store",
            to: "/ekostore"
        },
    ]

    const loc = useLocation()
    // //(loc.pathname)

  return ( 
   <div className='bg-[#EFE7F4]'>
      <div className=' pt-[3.5rem] font-lato section'>
    <div className='w-full  mx-auto lg:px-0 px-6  '>
          <div className='flex justify-between flex-col lg:flex-row items-center gap-[2rem] lg:gap-[3rem]  lg:items-left'>
        <div className='flex flex-col  text-left mr-[5.5rem]'>
            <div className=' w-fit mb-[1rem]'><img src={Logo} alt="" /></div>
            <p className='max-w-xs font-[Lato] text-[#4A4A4A] mb-5 font-[400] text-[14px] md:text-[1rem]'>Eko Pages is a publishing outfit that immerses children into the act of environmental sustainability with our top books, stories and publications.   </p>
    <p className='lg:font-400 lg:font-[700] mb-[1.5rem] hidden lg:block'>Follow us on social media</p>
    <div  className='lg:flex gap-8 mx-auto hidden  lg:mx-0'>
        <div><img src={twitter} alt="" srcset="" /></div>
        <div><img src={instagram} alt='' /></div>
        <div><img src={facebook} alt='' /></div>
        <div><img src={linkedln} alt=""/></div>
        <div></div>
    </div>
        </div>
    <div className='flex gap-[5.4rem] text-[#232323] w-full md:w-fit   font-lato  text-left md:mr-[4.75rem] h-full items-start font-[500] text-[1rem]'>
    <div className='flex flex-col gap-3 h-full'>
        {linkVal.map(li => <NavItem {...li}/>)}
    </div>
    <div className='flex flex-col gap-3'>
    {linkVal2.map(li => <NavItem {...li}/>)}
    
    </div>
    </div>
    <Subscribe />

    <section className='flex flex-col lg:hidden'>
    <p className='lg:font-400 lg:font-[700] mb-[1.5rem] '>Follow us on social media</p>
    <div  className='flex gap-[1.75rem] mx-auto  lg:mx-0'>
        <div><img src={twitter} alt="" srcset="" /></div>
        <div><img src={instagram} alt='' /></div>
        <div><img src={facebook} alt='' /></div>
        <div><img src={linkedln} alt=""/></div>
        <div></div>
    </div>
    </section>
        

        </div>

    










        <div className='border-t-solid border-[#868686] text-center font-lato font-[500] text-[1rem] pt-[2rem] border-t max-w-5xl mt-[3.75rem] mx-auto'>
        All rights reserved
        </div>
    </div>
    </div>
    </div>
  )
}

export default Footers