import React from 'react'

const SingleProdModal = ({image, name, author, amount}) => {
  return (
    <div className='flex bg-[#F6F6F6]'>
        <div className=''>
            <div>
                <img src={image} alt="" />
            </div>
        </div>

        <div className='flex flex-col items-center justify-center gap-[53px]'>
            <div className='flex gap-[8px]'>
<h1>{name}</h1>
<p>written by {author}</p>
<div>star</div>
        </div>
        
 {/* <div> */}

<div className='flex justify-content'>
     <p>{amount}</p>
     <div className='border-[#705E5E] border-solid border-[1px]  flex items-center rounded-[0.3125rem]'>
                <button className='px-[10px]  py-[3.2px] md:py-[0.32rem] md:px-[1rem] flex items-center text-[15px] md:text-[1rem]'>-</button> 1 <button className='px-[10px]  py-[3.2px] md:py-[0.32rem] md:px-[1rem] flex items-center'>+</button>
    </div>
</div>
{/* </div> */}

<div>
    <button className='bg-[#5A0C91] w-[216px]  h-[59px] rounded-[10px]'> Buy Now </button>
</div>

        </div>


    </div>
  )
}

export default SingleProdModal