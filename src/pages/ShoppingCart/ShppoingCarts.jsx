import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import ShoppingCartsContainer from '../../components/ShoppingCart/ShoppingCartsContainer'
import { get_cart } from '../../store/Actions/Cart'


const ShppoingCarts = () => {
  


  return (
    <ShoppingCartsContainer />
  )
}

export default ShppoingCarts