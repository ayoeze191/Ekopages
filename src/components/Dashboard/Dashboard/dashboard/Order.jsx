import React from 'react'

const Order = ({name, DateCreated, Paidon, status}) => {
  return (
    <div className='grid grid-cols-4 py-[20px] px-[24px] bg-[#F2F0F3]'>
        <div>{name}</div>
        <div>{DateCreated}</div>
        <div>{Paidon}</div>
        <div className={status === "Delivered"? "text-[#559708]":status === "Pending payment"?"text-[#DC1824]":status === "In transit"?"text-[#1976D2]":null}>{status}</div>
    </div>
  )
}

export default Order