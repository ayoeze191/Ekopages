import React from 'react'
import ApprovedOrder from './ApprovedOrder'
import { motion } from 'framer-motion'
import { useState } from 'react'
import instance from '../../../../../axios'
import { useEffect } from 'react'
import { tokenConfig } from '../../../../../Config/Config'
import { ClipLoader } from 'react-spinners'
const orders = [

    {
        OrderNo: "Eko hoodie",
        DateCreated: "30-11-2022",
        Total: "1-12-2022",
    },
    {
        OrderNo: "Eko hoodie",
        DateCreated: "30-11-2022",
        Total: "1-12-2022",
    },
    {
        OrderNo: "Eko hoodie",
        DateCreated: "30-11-2022",
        Total: "1-12-2022",
    },
    {
        OrderNo: "Eko hoodie",
        DateCreated: "30-11-2022",
        Total: "1-12-2022",
    },
    
]




const Approved = () => {
    const [loading, setLoading] = useState(true) 
    const [orders, setOrders] = useState(null)

    const getOrderCompletedOrder = () => {
        // setLoading(true)
        instance.get('history/completed/', tokenConfig())
        .then(res => {
            console.log(res.data.data.completed)
            setLoading(false)
            setOrders(res.data.data.completed)
        })
        .catch((err) => {
            setLoading(false)
            //(err)
        })
    }
      


useEffect(() => {
    getOrderCompletedOrder()
}, [])


  return loading? <div className='mx-auto w-full flex justify-center items-center'><ClipLoader /></div> :(
    <motion.div style={{overflowX: "hidden"}}
    initial = {{marginRight:"-100%", opacity:0}}
            animate = {{marginRight: ["-100%", "0"], opacity: [0, 1]}}
            // exit={{opacity: 0, marginRight:"-100%"}}
            transition={{ duration: 0.5,}}>
        <div className='hidden md:grid grid-cols-4 py-[20px] px-[24px] bg-[#CEB6DF] font-[700] text-lato text-[1rem]'>
            <div>Orders</div>
            <div>Date Created</div>
            <div>Paid on</div>
            <div>Status</div>
        </div>
        {orders.length > 0? orders.map((order) => <ApprovedOrder {...order}/>): <div className='flex w-full font-lato text-[24px] font-[500] mx-auto justify-center h-full items-center mt-[2rem]'>You are yet to complete any Order</div> }
    </motion.div>
  )
}

export default Approved