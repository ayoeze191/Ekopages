import React from 'react'
import back from "./../../assets/back.png"
import { Link } from 'react-router-dom'
const ShoppingCartsText = () => {
  return (
  <section className="bg-[#5A0C91] h-[10.625rem] flex justify-center items-center font-lato bold">
    <div className="w-full mx-auto lg:px-0 px-6 max-w-[77rem] py-4 mx-auto h-fit px-7  text-white flex items-center justify-between"> <Link className=' h-full gap-2 items-center hidden md:flex' to={'/ekostore'}> <div><img src={back} alt="" /></div>Continue shopping</Link> 
    <div className='font-[700] text-[1.5rem] text-center md:text-[3rem] flex h-full items-center mx-auto'>  Shopping Cart </div> <div></div> </div>
</section>
  )
}

export default ShoppingCartsText