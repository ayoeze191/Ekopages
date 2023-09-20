import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import instance from '../../../axios';
import del from "./../../../assets/cart/delete.png"
import { ClipLoader, BarLoader } from 'react-spinners';
import { update_cart_items, delete_item } from '../../../store/Actions/Cart';
import useProduct from './useProduct';
import { useAuthContext } from '../../../context/auth/auth';
import { useDispatch } from 'react-redux';
import { cookieContext } from '../../../App';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { data } from 'autoprefixer';
import Shimmer from '../../ui/Shimmer/Shimmer';

const Product = ({id, qty, cartit}) => {
    const [clicked, setClicked] = useState(false)

    const {product, loading} = useProduct(id)
    const {isAuth} = useAuthContext()
    const dispatch = useDispatch()
    const {cookie} = useContext(cookieContext)
    const update__loading = useSelector((state) => state.cart)
    
    // const cart_total = useSelector(state => state.cart.total)

    const authVerification = {
        isAuth,
        session_id: cookie
    }


    


    const remove_item = () => {
        dispatch(delete_item(cartit, authVerification))
    }

    //(cartit)

    const update_cart = (type, initialVal) => {

        

        //("updating ")
        let quantity = initialVal
        if(type === "add"){
            quantity = quantity + 1
        }
        else {
            quantity = quantity - 1
        }
      dispatch(update_cart_items(cartit, quantity, authVerification, type))
    }

    useEffect(() => {
        if(update__loading.update_addloading === false && update__loading.update_subloading  === false){
            setClicked(false)
        }
    })


  return (<div className='flex justify-between w-full  mx-auto max-w-[77rem] font-lato border-b-solid border-b-[1px] border-b-[#BBBBBB] h-[269px] items-center' >
  <div className='flex gap-[13.15px] md:gap-[3.25rem] items-center'>
      <div className='w-[62.85px] h-[92px] md:w-[101.85px] md:h-[128px]'>
      
      {loading?<Shimmer />:
      <img className='w-full h-full' src={product.data.image} alt="" /> 
      }
      </div>

      <div className=''>
        {loading?<div className='h-[60px] w-[6rem]'> <Shimmer/></div>:
        <>
          <p className='font-[600] text-[1rem]]'>
            {product.data.name}
            </p>
          <p className='font-[400] font-[1rem] text-[12px] md:text-[1rem]'>Written by: {loading?<Shimmer />:product.data.author}</p>
          <p className='text-[9.96px] font-[500] md:text-[initial]'>Category: {loading?<Shimmer />:product.data.category}</p>
          </>
    }
      </div>

  </div>

  <div className='flex md:gap-[6.5rem] items-center flex-col md:flex-row justify-between'>
      <div className='border-[#705E5E] border-solid border-[1px]  flex items-center rounded-[0.3125rem]'>
          <button className='px-[10px]  py-[3.2px] md:py-[0.32rem] md:px-[1rem] flex items-center text-[15px] md:text-[1rem]' onClick={() =>
              { update_cart('sub', qty)
              setClicked(true)
          }
          }
              >{update__loading.update_subloading && clicked ?<ClipLoader size={'15px'} />:"-"}</button> {qty} <button className='px-[10px]  py-[3.2px] md:py-[0.32rem] md:px-[1rem] flex items-center' onClick={() =>
              { update_cart('add', qty)
              setClicked(true)
              }}>{update__loading.update_addloading && clicked?<ClipLoader size={'15px'} />:"+"}</button>
      </div>
      <p className='text-[14px] md:text-[1rem] '>
          Subtotal: {loading?<Shimmer />: product.data.price * qty}
      </p>
      <div onClick={() => remove_item()}>
          <img src={del} className='w-[19.5px] h-[21px] md:w-initial md:h-initial' alt="" />
      </div>
  </div>
</div>
  )
}

export default Product