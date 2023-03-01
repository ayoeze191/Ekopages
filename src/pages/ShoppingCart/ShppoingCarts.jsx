import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import ShoppingCartsContainer from '../../components/ShoppingCart/ShoppingCartsContainer'
import { get_cart } from '../../store/Actions/Cart'


const ShppoingCarts = () => {
  const disptach = useDispatch()
  

  useEffect(() => {
    disptach(get_cart())
    console.log("gettingcart")
  })


  return (
    <ShoppingCartsContainer />
  )
}

export default ShppoingCarts