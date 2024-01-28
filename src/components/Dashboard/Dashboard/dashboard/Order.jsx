import React from 'react'

const Order = ({product, date_created, paid_on, completed}) => {
  // 
  // console.log(completed)
  return (
    <div className='flex flex-col gap-[8px] md:gap-[0] md:grid md:grid-cols-4 py-[20px] px-[24px] bg-[#F2F0F3] border-solid border-[0.4px] border-[#969696] md:border-0 font-lato rounded-[5px]'>
        <div >{product}</div>
        <div className="  md:after:hidden before:content-['Date_Created'] flex justify-between md:table-cell md:before:hidden md:text-left md:border-y-0 py-3 before:text-black bg-white md:bg-[initial] rounded-[3px] md:rounded-[0px] px-[8px] md:px-[0px] font-[400]" data-label = "Date Created">{date_created}</div>
        <div className="  md:after:hidden before:content-['Date_Created'] flex justify-between md:table-cell md:before:hidden md:text-left md:border-y-0 py-3 before:text-black bg-white md:bg-[initial] rounded-[3px] md:rounded-[0px] px-[8px] md:px-[0px]">{paid_on?paid_on:'nill'}</div>
        <div className={ completed ? "text-[#559708]": "text-[#DC1824]"}>{completed?'Completed':'pending'}</div>
    </div>
  )
}
export default Order