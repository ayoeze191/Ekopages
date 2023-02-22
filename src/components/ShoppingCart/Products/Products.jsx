import React from 'react'
// import nkem from "./../../assets/EkoStore/nkem.png";
import { useReducer } from 'react';
import { storeReducer, initialState  } from '../../../reducer/StoreCardReducer';
// import { intialState } from '../../../reducer/Nav';
import Product from './Product';
// const Productdetails = [
//     {
//         image: nkem,
//         title: "The Travails of Nkem"
//     }
// ]


const Products = () => {
   const [state, dispatch] = useReducer(storeReducer, initialState) 
  return (
    <div className='px-6 lg:px-0'>
        <p className='text-[#5A0C91] md:hidden'>Continue Shopping</p>
        {state.product.filter(a => a.Name === "The Travails of Nkem" | a.Name === "Jemima and the Wind Turbine" | a.Name === "Eko Hoodie").slice(0, 3).map(prod => <Product {...prod}/>)}
    </div>
  )
}

export default Products 