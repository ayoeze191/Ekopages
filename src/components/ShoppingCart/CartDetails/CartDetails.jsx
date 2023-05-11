import React from 'react'
import BillingDetails from './BillinngDetails/BillingDetails'
import CartTotals from './CartTotals/CartTotals'
import { useFormik } from 'formik'
import { validate } from '../../validate/validate'
import { create_billings } from '../../../store/Actions/billing'
import { useSelector } from 'react-redux'
import { payment_details } from '../../../store/Actions/billing'
import { useState } from 'react'
import instance from '../../../axios'
import { tokenConfig } from '../../../Config/Config'
import { useAuthContext } from '../../../context/auth/auth'
import axios from 'axios'
import { useContext } from 'react'
import { cookieContext } from '../../../App'
import { useEffect } from 'react'

const CartDetails = () => {

  const {cookie} = useContext(cookieContext)
  const cart = useSelector(state => state.cart)
  const {isAuth} = useAuthContext()

  console.log(isAuth)

  

  const [initialbillingDetails, setinitialbillingDetails] = useState(null)
  // const [billLoading, ]
  const total = useSelector((state) => state.cart.total)
  
  const [payment, setPayment] = useState({sucess: false, loading: false, error: false })
  
  const paymentFunc = (data) => {
    if(isAuth) {
      instance.post('/cart_payment/payment/', data,tokenConfig())
    .then((res) => {
      setPayment({error:false, sucess:true})
      window.location.href = res.data
    })   
    .catch((err) => {
      setPayment({sucess:false, error:true})
    })
    }
    else{
      instance.post('/cart_payment/payment/', data,tokenConfig())
      .then((res) => {
      setPayment({error:false, sucess:true})
      window.location.href = res.data
      })
      .catch((err) => {
        setPayment({sucess:false, error:true})
      })
    }
}


  const getBillingsDetails = () => {
    instance.get('/billing-details/billing-details/', tokenConfig())
    .then((res) => {
      setinitialbillingDetails(initialbillingDetails)
      console.log(res.data.data, "getting billing details")
      
    })
    .catch((err) => {
      setinitialbillingDetails(null)
      console.log(err, "getting error for billing details")
    })
  }


  useEffect(() => {
    if(isAuth){
      getBillingsDetails()
    }
  }, [])
  //



  const formik = useFormik({
    initialValues: {
      "First_name": initialbillingDetails?initialbillingDetails.First_name:"",
      "Last_name": initialbillingDetails?initialbillingDetails.Last_name:"",
      "Company_name": initialbillingDetails?initialbillingDetails.Company_name:"",
      "country": initialbillingDetails?initialbillingDetails.country:"",
      "street_address": initialbillingDetails?initialbillingDetails.street_address:"",
      "city": initialbillingDetails?initialbillingDetails.city:"lagos",
      "apartment": initialbillingDetails?initialbillingDetails.apartment:"",
      "state": initialbillingDetails?initialbillingDetails.state:"",
      "phone_number": initialbillingDetails?initialbillingDetails.phone_number:"",
      "email": initialbillingDetails?initialbillingDetails.email:"",
      "shipping_location": initialbillingDetails?initialbillingDetails.shipping_location:"",
      "amount": total?total:null,
      "Order_Notes": initialbillingDetails?initialbillingDetails.Order_Notes:"",
      // "create_Account": false,
      // "Deliver_to_a_different_address": false
    },
    // validate,
    onSubmit: ({amount, First_name, Last_name, Company_name, country,
       street_address, city,
      apartment, state, phone_number,
      email, shipping_location,
      create_Account, 
      Order_Notes}) => {
        const authVerification = {
          isAuth,
          session_id: cookie
        }
        create_billings({
          "First_name": First_name,
          "Last_name": Last_name,
          "Company_name": Company_name,
          "country": country,
          "street_address": street_address,
          "city": city,
          "Apartment": apartment,
          "state": state,
          "phone_number": phone_number,
          "email": email,
          "shipping_location": shipping_location,  
          "Order_Notes": Order_Notes
      }, authVerification)
    paymentFunc({
  amount,
  email
        })
      }})













  return (
    <div className='mx-auto lg:px-0 px-6 max-w-[77rem] mt-[1.5rem] mb-[100px]' >
         <p className='mb-[1rem]'>Have a discount code?</p><div className='flex  flex-col md:flex-row gap-[6rem]'>
        <BillingDetails formik={formik}/>
        <CartTotals formi={formik}/>
        </div>
    </div>
  )
}

export default CartDetails