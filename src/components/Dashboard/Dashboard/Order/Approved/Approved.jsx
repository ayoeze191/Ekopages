import React from 'react'
import ApprovedOrder from './ApprovedOrder'
import { motion } from 'framer-motion'
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
  return (
      
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
        {orders.map((order) => <ApprovedOrder {...order}/>)}
    </motion.div>
  )
}

export default Approved