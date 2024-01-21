import React, { useEffect, useState } from 'react'
import { BsCart } from 'react-icons/bs'
import Order from './Order'
import instance from '../../../../axios'
import { tokenConfig } from '../../../../Config/Config'
import { useNavigate } from 'react-router-dom'



const orders = [
    {
        name: "Eko hoodie",
        DateCreated: "30-11-2022",
        Paidon: "1-12-2022",
        status: "Delivered"
    },
    {
        name: "Eko Bottle",
        DateCreated: "30-11-2022",
        Paidon: "null",
        status: "Pending payment"
    },
    {
        name: "The Travails of Nkem",
        DateCreated: "30-11-2022",
        Paidon: "null",
        status: "Pending payment"
    },
    {
        name: "Eko  shirt",
        DateCreated: "30-11-2022",
        Paidon: "1-12-2022",
        status: "In transit"
    },
]

const Orders = () => {
    const navigate = useNavigate()
    const [orders, setOrders] = useState([])  
    const getCompletedOrders = () => {
        instance.get('/history/all-history/', tokenConfig())
        .then((res)=> {
            console.log(res.data.data)
            setOrders(res.data.data.total)
        })
    }
    useEffect(() => {
        getCompletedOrders()
    }, [])

  return (
    <div>
        {orders.length == 0 ? <div className=' border-t-[orange] border-t-solid border-t-2 py-[14.2px] px-[17.8px] items-center font-[400] text-[12px] md:text-base font-lato mt-[1rem] text-[#4A4A4A] text-center bg-[#F8F8F8] w-fit mx-auto flex gap-2 md:gap-[17.9px] flex-col' >
        <p> No Order  Yet</p>
     <button onClick={() => navigate('/ekostore')} className='font-[400] text-[#E9E9E9] py-[15px] px-[30px] bg-[#5A0C91] rounded-[5px] font-lato mx-auto text-sm md:text-base'>Go to EkoStore</button>
    </div>:
       <> <div className='flex gap-[18.38px] items-center justify-center md:justify-start mb-[2rem] '> <div>
            <BsCart />
            </div> 
            <p className='text-[1.5rem]'> My Orders </p></div>

        <div className='flex flex-col md:gap-[4px]'>
        <div className='hidden md:grid grid-cols-4 py-[20px] px-[24px] bg-[#CEB6DF] font-[700] text-lato text-[1rem]'>
            <div>Orders</div>
            <div>Date Created</div>
            <div>Paid on</div>
            <div>Status</div>
        </div>
        <div className='flex flex-col gap-[24px] md:gap-[4px]'>
        { orders.map((order) => <Order {...order} status={order.completed == false?"Pending payment":"Paid"}/>)}
        </div>
        </div>
        </>
}
    </div>
  )
}

export default Orders