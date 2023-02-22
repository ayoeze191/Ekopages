import React from 'react'
import Order from './Order'



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
  return (
    <div>
        <div>My Orders</div>

        <div className='flex flex-col gap-[4px]'>
        <div className='grid grid-cols-4 py-[20px] px-[24px] bg-[#CEB6DF]'>
            <div>Orders</div>
            <div>Date Created</div>
            <div>Paid on</div>
            <div>Status</div>
        </div>

        {orders.map((order) => <Order {...order}/>)}
        </div>
    </div>
  )
}

export default Orders