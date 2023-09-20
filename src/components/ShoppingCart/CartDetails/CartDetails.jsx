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
import { useDispatch } from 'react-redux'
import { clear_cart } from '../../../store/Actions/Cart'


const CartDetails = () => {

  const {cookie} = useContext(cookieContext)
  const cart = useSelector(state => state.cart)
  const {isAuth, user} = useAuthContext()
  const dispatch = useDispatch()
  
  //(isAuth)

  

  const [initialbillingDetails, setinitialbillingDetails] = useState(null)
  // const [billLoading, ]
  const total = useSelector((state) => state.cart.total)
  
  const [payment, setPayment] = useState({sucess: false, loading: false, error: false })
  
  const paymentFunc = (data) => {
    const authVerification = {
      isAuth,
      session_id: cookie
    }
    setPayment({error:false, sucess:false, loading:true})
    if(isAuth) {
      instance.post('/cart_payment/payment/', data, tokenConfig())
    .then((res) => {
      //(res)
      setPayment({error:false, sucess:true,loading: false})
      dispatch(clear_cart(authVerification))
      window.location.assign(res.data.data.data.authorization_url);
    })   
    .catch((err) => {
      //(err)
      setPayment({sucess:false, error:true, loading: false})
    })
    }
    else{
      instance.post(`/unregistered-cart-payment/payment/${cookie}/`, data)
      .then((res) => {
      setPayment({error:false, sucess:true})
      window.location.assign(res.data.data.data.authorization_url);
      })
      .catch((err) => {
        setPayment({sucess:false, error:true})
      })
    }
}


  const getBillingsDetails = () => {
    instance.get('/billing-details/billing-details/', tokenConfig())
    .then((res) => {
      setinitialbillingDetails(res.data.data)
      //(res.data.data, "getting billing details")
      
    })
    .catch((err) => {
      setinitialbillingDetails(null)
      //(err, "getting error for billing details")
    })
  }


  useEffect(() => {
    if(isAuth){
      getBillingsDetails()
    }
  }, [])


  //
const [Locations, setLocations] = useState([])


    
  const billing_locations = () => {
    instance.get('/checkout/shipping_locations/')
    .then((res) => {
        setLocations(res.data.data)
    })
    .catch((err) => {
        //(err, "billing Location error")
    })
}

const [OverallAmount, setOverAmount] = useState(total?total:0)
const Totalfunc = () => {
      
  let  OverallTotalCost = parseInt(total)
  if(Locations) {
      const list =  Locations.map(loc => loc.id == formik.values.shipping_location?parseInt(loc.price):0)
      OverallTotalCost += list[0]
  }
  setOverAmount(OverallTotalCost)
}
  useEffect(() => {
      billing_locations()
  }, [])

 

useEffect(() => {
    Totalfunc()
    //(initialbillingDetails, "checking")
}, )



const formik = useFormik({
  enableReinitialize: true,
  initialValues: {
    "First_name": initialbillingDetails?initialbillingDetails.First_name:"", 
    "Last_name": initialbillingDetails?initialbillingDetails.Last_name:"",
    "Company_name": initialbillingDetails?initialbillingDetails.Company_name:"",
    "country": initialbillingDetails?(initialbillingDetails.country.length > 0 ?initialbillingDetails.country: "nigeria"):"nigeria",
    "street_address": initialbillingDetails?initialbillingDetails.street_address:"",
    "city": initialbillingDetails?(initialbillingDetails.city.length > 0 ?initialbillingDetails.city: "lagos"):"lagos",
    "apartment": initialbillingDetails?initialbillingDetails.apartment:"",
    "state": initialbillingDetails?(initialbillingDetails.state.length > 0 ?initialbillingDetails.city: "lagos"):"lagos",
    "phone_number": initialbillingDetails?initialbillingDetails.phone_number:"",
    "email": initialbillingDetails?initialbillingDetails.email:"",
    "shipping_location": initialbillingDetails?initialbillingDetails.shipping_location.location:0,
    "amount": total?total:null,
    "Order_Notes": initialbillingDetails?initialbillingDetails.Order_Notes:"",
  },
  
  

  // validate,
  onSubmit: ({First_name, Last_name, Company_name, country,
     street_address, city,
    apartment, state, phone_number, 
    email, shipping_location,
    create_Account, 
    Order_Notes}) => {
      const authVerification = {
        isAuth,
        session_id: cookie
      }
      let shippingemail = email
      if(isAuth === true && email.length <= 4){
          shippingemail = user.email
      }
      dispatch( create_billings({
        "First_name": First_name,
        "Last_name": Last_name,
        "Company_name": Company_name,
        "country": country,
        "street_address": street_address,
        "city": city,
        "Apartment": apartment,
        "state": state,
        "phone_number": phone_number,
        "email": shippingemail,
        "shipping_location": shipping_location,  
        "Order_Notes": Order_Notes
    }, authVerification))
  paymentFunc({
amount:OverallAmount,
email
      })
    }})



  return (
    <div className='mx-auto lg:px-0 px-6 max-w-[77rem] mt-[1.5rem] mb-[100px]' >
         <p className='mb-[1rem]'>Have a discount code?</p><div className='flex  flex-col md:flex-row gap-[6rem]'>
        <BillingDetails formik={formik}/>
        <CartTotals formi={formik} Locations = {Locations} OverallAmount={OverallAmount} loading={payment.loading}/>
        </div>
    </div>
  )
}

export default CartDetails