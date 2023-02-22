import React from 'react'
import bell from "./../../../../assets/dashboard/bell.png"
const OrderDetail = () => {
  return (
    <div className='font-lato pl-[1.99rem] pr-[9.4375rem] pt-[5rem]'>
        <div className='flex justify-between items-center'>
        <p className='text-[#5A0C91]'>Back</p>

        <p className='flex flex-col gap-[0.5rem] text-[2rem] text-[#232323] font-[600] mb-[3.5rem]'>
            <p className='text-[#4A4A4A] font-[400] text-center flex flex-col items-center'><div> Order Details </div> <p className='text-[1rem] text-[#4A4A4A]'> #23145 was delivered on November 14,2022 </p></p>
        </p>

        <div><img src={bell} alt="" srcset="" /></div>
        </div>


{/* header */}
    <div className='grid grid-cols-3 mb-[1.25rem] pb-[0.5rem] border-solid border-[#CCCCCC] border-b-[1px]'>
    <div className='font-[400]'>PRODUCT NAME</div> <div className='font-[400]'> TOTAL </div>
    </div>
{/* table header ends */}

{/* table rows */}
<div className='grid grid-cols-3 text-[1rem] mb-[1.25rem]'>
    <div>Eko Hoodie x1 </div> <div className='font-[500]'> #10,000 </div> <div className='text-[#4A4A4A] cursor-pointer'>Add to Cart</div>
    </div> 
    <div className='grid grid-cols-3 text-[1rem] mb-[1.25rem]'>
    <div>The Travails of Nkem x2</div> <div className='font-[500]'> 10,000 </div> <div className='text-[#4A4A4A] cursor-pointer'>Add to Cart</div>
    </div>
     <div className='grid grid-cols-3 text-[1rem] mb-[1.25rem] pb-[1.25rem] border-solid border-[#CCCCCC] border-b-[1px]'>
    <div>Eco Bottles x2</div> <div className='font-[500]'> #10,000 </div> <div className='text-[#4A4A4A] cursor-pointer'>Add to Cart</div>
    </div>
{/* table row ends */}

{/* table footer */}
<div className='grid grid-cols-3 text-[1.25rem]'>
    <div>TOTAL </div> <div className='font-[500] text-[1rem]'>   30,000 </div> <div className='text-[#4A4A4A] cursor-pointer'>Add to Cart</div>
    </div>

{/* table footer ends */}

    </div>
  )
}

export default OrderDetail