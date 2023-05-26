import React from 'react'
import BillingDetails from './BillinngDetails/BillingDetails'
import CartTotals from './CartTotals/CartTotals'

const CartDetails = () => {
  return (
    <div className='mx-auto lg:px-0 px-6 max-w-[77rem] mt-[1.5rem] mb-[6.25rem]'>
         <p className='mb-[1rem]'>Have a discount code?</p><div className='flex  gap-[6rem]'>
        <BillingDetails />
        <CartTotals />
        </div>
    </div>
  )
}

export default CartDetails