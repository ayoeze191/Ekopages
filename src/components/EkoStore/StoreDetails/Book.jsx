import React from 'react'
import Vector15 from "./../../../assets/EkoStore/Vector15.png"
const Book = ({name, author, price, image, available}) => {
  return (
      <div className='flex flex-col gap-[70.46px] mt-[148.78px]'> 
    <div className='font-lato flex gap-[3.25rem] section items-center font-lato'>
        <div className='rounded-[10px] w-[40%] h-[636.54px]'><img src={image} alt="" className='w-full h-full' /></div> 

<div className='font-[400] text-[20px] w-[50%] flex flex-col gap-[88px]'>
    <div className='flex flex-col '> 
    <div className='font-[700] text-[2.25rem] mb-[9px]' > {name}</div>
    <div className='font-[400] text-[1.25rem] mb-[15px]'>Written by: {author}</div>
    <div className='mb-[8px]'>5 Star</div>
    <div className='text-[#247A00] font-[400] text-[1.25rem] mb-[1rem]'>{available?"In Stock":"Out Of Stock"}</div>
    <div className='text-[#247A00] text-[2rem] mb-[25px]'>{price}</div>
    <div className='flex justify-between'>
    <div className='flex border-solid border-[#232323] border-[1px] py-[5px] h-[40px] w-[120px] justify-around rounded-[5px]'>
    <div className='text-[#705E5E]'>-</div>
    <div className=''>1</div>
    <div className='text-[#705E5E]'>+</div>
    </div>
    <div className='flex justify-between gap-[34.5px] items-center'>
        <button className='bg-[#5A0C91] font-[500] text-[1.25rem] text-[#EFE7F4] font-lato w-[216px] h-[59px] h-[3.687rem] w-[13.5rem] rounded-[10px]'>Add to Cart</button> <div><img src={Vector15} alt="" /></div>
    </div>
    </div>
    </div>

    <div>
        Shiiping Information
    </div>

</div>
    </div>


    <div>
        Book Storyies
    </div>




    </div>
  )
}

export default Book