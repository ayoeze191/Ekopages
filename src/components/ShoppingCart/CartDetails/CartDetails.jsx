import React from 'react'
import BillingDetails from './BillinngDetails/BillingDetails'
import CartTotals from './CartTotals/CartTotals'
import { useFormik } from 'formik'
import { validate } from '../../validate/validate'
const CartDetails = () => {
  const formik = useFormik({
    initialValues: {
      "First_name": "",
      "Last_name": "",
      "Company_name": "",
      "country": "",
      "street_address": "",
      "city": "lagos",
      "apartment": "",
      "state": "",
      "phone_number": "",
      "email": "",
      "shipping_location": "",
      "create_Account": false,
      "Deliver_to_a_different_address": false
    },
    // validate,
    onSubmit: ({First_name, Last_name, Company_name, country, street_address, city, apartment, state, phone_number, email, shipping_location, create_Account}) => {
        console.log(create_Account)
    }
    // onsubmit: 
  })



  return (
    <form className='mx-auto lg:px-0 px-6 max-w-[77rem] mt-[1.5rem]' onSubmit={formik.handleSubmit}>
         <p className='mb-[1rem]'>Have a discount code?</p><div className='flex  flex-col md:flex-row gap-[6rem]'>
        <BillingDetails formik={formik}/>
        <CartTotals submit={formik.handleSubmit}/>
        </div>
    </form>
  )
}

export default CartDetails