import React , {useEffect} from 'react'
import CartDetails from './CartDetails/CartDetails'
import Products from './Products/Products'
import ShoppingCartsText from './ShoppingCartsText'
import { useSelector, useDispatch } from 'react-redux'
// import { get_cart } from '../../store/Actions/Cart' 

const ShoppingCartsContainer = () => {
  const cart = useSelector(state => state.cart)

  return (
    <div>
        <ShoppingCartsText />
        
        <Products />
        <CartDetails />
    </div>
  )
}

export default ShoppingCartsContainer