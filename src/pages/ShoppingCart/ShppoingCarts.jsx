import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import ShoppingCartsContainer from '../../components/ShoppingCart/ShoppingCartsContainer'
import { get_cart } from '../../store/Actions/Cart'


const ShppoingCarts = () => {
  const loc = window.location

  useEffect(() => {
      window.scrollTo(0, 0);

  }, [ loc]);


  return (
    <ShoppingCartsContainer />
  )
}

export default ShppoingCarts