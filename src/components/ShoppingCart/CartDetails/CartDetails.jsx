import React from 'react'
import BillingDetails from './BillinngDetails/BillingDetails'
import CartTotals from './CartTotals/CartTotals'

const CartDetails = () => {
  return (
    <div className='mx-auto lg:px-0 px-6 max-w-[77rem] mt-[1.5rem]'>
         <p className='mb-[1rem]'>Have a discount code?</p><div className='flex  flex-col md:flex-row gap-[6rem]'>
        <BillingDetails />
        <CartTotals />
        </div>
    </div>
  )
}

export default CartDetails