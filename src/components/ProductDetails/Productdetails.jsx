import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import BookProductDetail from './BookProductDetail'
import { get_cart } from '../../store/Actions/Cart'
import { useEffect } from 'react'
import { useAuthContext } from '../../context/auth/auth'
import { useContext } from 'react'
import { cookieContext } from '../../App'

const Productdetails = () => {

  const {id} = useParams()
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const {isAuth} = useAuthContext()
  const {cookie} = useContext(cookieContext)
  const [presentId, setpresentId] = useState(null)
  // //(, "sas")
  useEffect(() => {
    const authVerification = {
      isAuth,
      session_id: cookie
    }  

    dispatch(get_cart(authVerification))
  }, [])
  return (
    <div className='section mb-9'>
      {
      cart.cart.length > 0? <BookProductDetail 
      id = {cart.cart.filter((item) => item.product == id)[0].product} 
      cartit={cart.cart.filter((item) => item.product == id)[0].id}
      qty={cart.cart.filter((item) => item.product == id)[0].quantity}
      />:null
      }
    </div>
  )
}

export default Productdetails