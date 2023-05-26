import React from 'react'
import Vector from "./../../assets/Notifications/Vector.png"
import clarity_certificate_line from "./../../assets/dashboard/clarity_certificate_line.png"
import clarity_shopping_cart_line from "./../../assets/dashboard/clarity_shopping_cart_line.png"



const Notifications = () => {
  return (
    <div className='pl-[2.125rem] pr-[5.625rem]'>
        <p>Notifications</p>
        {/* table */}

        <div>
{/* table head */}
        <div className='grid grid-cols-3 pb-[1rem]  border-b-solid border-b-[#BBBBBB]'>
            <div>Today</div>
            <div>Previous</div>
            <div>Clear all</div>
        </div>
{/* end */}

        <div>
            <div className='flex justify-between font-lato py-[2.5rem]  border-b-solid border-b-[#BBBBBB]'>
                <div className='flex gap-[1.625rem]'>
                <div><img src={clarity_shopping_cart_line} alt="" /></div>
                <div>
                    <div className='text-[#232323] font-lato font-[600]'>Pending Payment</div>
                        <div className='text-[#4A4A4A] font-[400]'>Order #12345 is pending payment. Go to EkoStore  to complete transaction</div>
                </div>
                </div>
                <div>
                <img src={Vector} alt="" srcset="" />
                </div>
            </div>

            <div className='flex justify-between font-lato py-[2.5rem]  border-b-solid border-b-[#BBBBBB]'>
                <div className='flex gap-[1.625rem]'>
            <div><img src={clarity_certificate_line} alt="" /></div>
                <div>
                    <div className='text-[#232323] font-lato font-[600]'>Take a module today</div>
                    <div className='text-[#4A4A4A] font-[400]'>You are yet to complete the Introduction to SDG course.:Take a lesson today. </div>
                </div>
                </div>
                <div>
                <img src={Vector} alt="" srcset="" />
                </div>
            </div>
            <div className='flex justify-between font-lato py-[2.5rem]  border-b-solid border-b-[#BBBBBB]'>
                <div className='flex gap-[1.625rem]'>
            <div><img src={clarity_shopping_cart_line} alt="" /></div>
                <div>
                    <div className='text-[#232323] font-lato font-[600]'>Order Completed</div>
                    <div className='text-[#4A4A4A] font-[400]'>Order #12345 is Completed. Thank you for shopping from Eko Store </div>
                </div>
                </div>
                <div>
                <img src={Vector} alt="" srcset="" />
                </div>
            </div>
            {/* <div></div> */}
        </div>

        </div>
    </div>
  )
}

export default Notifications