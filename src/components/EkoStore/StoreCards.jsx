import React from 'react'
import StoreCard from './StoreCard'
import { useReducer } from 'react'
import { storeReducer, initialState } from '../../reducer/StoreCardReducer'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { get_products } from '../../store/Actions/Product'
import Loader from '../ui/Loader/Loader'
// import 
const StoreCards = () => {

  const store = useSelector(state => state.products)
  const disptach = useDispatch()

  useEffect(() => {
    disptach(get_products('All', "All"))
  }, [])


  return (
    store.isloading ? <Loader /> :store.products?
    <div className='lg:grid lg:grid-cols-3 mx-auto section gap-x-[2rem] gap-y-[12.25rem] items-center mb-[60px]'>
        {store.products.map((prod) => <StoreCard {...prod}/>)}
    </div>
    :<div className='h-[50vh] w-full text-center font-lato text-[2rem]'>Empty Product</div>
  )
}

export default StoreCards