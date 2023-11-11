import React from 'react'
import Vector15 from "./../../assets/EkoStore/Vector15.png"
import Star from "./../../assets/EkoStore/Star.png"
import { Add_to_cart } from '../../store/Actions/Cart'
// import Naira from "./../../assets/landingpage/nairaSym.svg"
import { useDispatch, useSelector } from 'react-redux'
import { finished_adding } from '../../store/reducers/Cart'
// import { TbCurrencyNaira } from 'react-icons/tb'
import {FaNairaSign} from 'react-icons/fa6'
import AuthButton from '../authButton'
import AddToCartbtn from './AddToCartbtn'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../context/auth/auth'
import GeneralUiOverlay from '../ui/GeneralUiOverlayLoader'
import { useContext } from 'react'
import { cookieContext } from '../../App'
import { toast } from 'react-toastify'

const StoreCard = ({name, image, available, author, price, id, category, merch_size}) => {
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const {isAuth, setloginMode} = useAuthContext()
  const {cookie} = useContext(cookieContext)

  const navigate = useNavigate()

  const addTocart = () => {
    const authVerification = {
      isAuth,
      session_id: cookie
  }
      dispatch(Add_to_cart(id, authVerification))
  }

  if(cart.success) {
    navigate('/cart')
    // navigate(`/ekostore/product/${id}`)
  }


  //(image)
  const myArray = [Star, Star, Star, Star, Star]
  return (
    // cart.loading?<GeneralUiOverlay /> :
    <div className='
    flex items-center rounded-[10px] bg-[#EFE7F4] h-[184px] lg:h-[266px]  md:max-w-none mx-auto'>
        {/* <div className='w-full'>
            {category !== 'books'?<div className='relative mb-[2rem] -mt-24 w-[8rem] h-[8rem] md:w-[9rem] md:h-[9rem] mx-auto bg-white px-6 py-6'><img src={image}  className=' w-full h-full' /></div>:
            <div className='relative mb-[2rem] -mt-24 w-[8rem] h-[8rem] md:w-[9rem] md:h-[9rem] mx-auto '><img src={image}  className=' w-full h-full' /></div>}
            <div className='flex justify-between font-lato font-[700] text-1.47rem mb-[0.5rem]'>{name}<p><img src={Vector15} /></p></div>
           {merch_size && <div className='flex justify-between font-lato font-[700] text-1.47rem mb-[0.5rem]'>{merch_size}</div>}
          <div className='flex gap-2'> {myArray.map((err) => <div className=''><img src={err} /></div> )}</div>

            {category == "books"&&<div className='font-lato font-[400] text-[1.125rem]'>Written by: {author}</div>}
            <div className='font-lato font-[500] text-[1.125rem] font-lato '>
              Category: {category}
            </div>
            <div className='text-[0.8rem] mb-[1rem]'>{available?'In Stock': ''}</div>
        </div> */}
        
        {/* <div className='flex justify-between w-full w-full border-t-solid pt-[2.68rem] border-t-[rgba(90, 12, 145, 0.5)] border-t-[0.15rem]'> */}
            {/* <div className='font-[500] text-[1.68rem] font-lato'>
                #{price}
            </div> */}
            {/* <button className='px-[1.18rem] bg-[#5A0C91] text-[#ffffff] py-[0.656rem] rounded-[0.3125rem] font-lato font-[500] text-[1rem]' onClick={() => dispatch(Add_to_cart(id))}>
            
            </button> */}
            
            {/* <AddToCartbtn name={"Add to Cart"} isLoading={(cart.prodid===id && cart.loading)? true:false} add={addTocart}></AddToCartbtn> */}
        {/* </div> */}

            <div className='w-[130.05px] h-[184px] lg:h-[266px] '>
              <img src={image} className='w-full h-full object-cover' alt={name} style={{
                'borderRadius': "10px 0px 0px 10px"
              }}/>
            </div>
            <div className='flex-1 flex flex-col justify-between h-full pt-[16px] md:pt-[24px]'>
              <div className=''>
            <p className='flex justify-between font-lato font-[600] text-[20px] mb-[0.5rem] text-[#303030] px-[16px] md:px-[24px]'>{name.length > 16 ? name.slice(0, 15) + "...":name}</p>
            {category == "books"&&<div className='font-lato font-[400] text-[12px] text-[#303030] leading-[14px] px-[16px] md:px-[24px]'>Written by: {author}</div>}
            {merch_size && <div className='font-lato font-[400] text-[12px] text-[#303030] leading-[14px] px-[16px] md:px-[24px]'>{merch_size}</div>}
            <div className='font-lato font-[400] text-[10px] text-[#9E9E9E] px-[16px] md:px-[24px] mt-[13px]'>
              Category: {category === "books"?"Books":"Merch"}
            </div>
            </div>
            <div className='px-[16px] md:px-[24px] flex items-center font-semibold  md:text-[24px] leading-[21px] md:leading-[28.8px] font-latomedium'>
            <span> <FaNairaSign /> </span><span className='h-full  pt-1'>{price}</span>
            </div>
            <div className='flex gap-[32px]  items-center pl-[16px] md:pl-[24px] justify-between w-full '>
            <img src={Vector15} />
            <AddToCartbtn name={"Add to Cart"} isLoading={(cart.prodid===id && cart.loading)? true:false} add={addTocart}></AddToCartbtn> 
            </div>
            </div>
        
    </div>
  ) 
}

export default StoreCard

// storecard flex items-center justify-center px-[2rem] pb-[2.5rem] w-full h-[420px] hover:border-[1px] hover:border-solid hover:border-[#5A0C91] transition-all cursor-pointer