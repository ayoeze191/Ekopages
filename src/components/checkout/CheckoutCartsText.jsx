import React from 'react'
import back from "./../../assets/back.png"
const ShoppingCartsText = () => {
  return (
  <section className=" h-[10.625rem] flex justify-center items-center font-lato bold mb-[3rem]">
    <div className="w-full mx-auto lg:px-0 px-6 max-w-[77rem] py-4 mx-auto h-fit px-7  text-black flex items-center justify-between"> <span className=' h-full flex gap-2 items-center text-[#5A0C91]' > <div><img src={back} alt="" /></div> back </span> 
    <div className='font-[700] text-[3rem] flex h-full items-center'> Checkout </div> <div></div> </div>
</section>
  )
}

export default ShoppingCartsText