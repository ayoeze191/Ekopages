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
    <div>
        {state.product.slice(0, 1).map(prod => <Product {...prod} />)}
    </div>
  )
}

export default Products 