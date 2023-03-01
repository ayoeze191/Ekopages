import React from 'react'
import NavHead from '../about/Navhead'
import Footers from '../footer/Footers'
import EkoNAv from './EkoNAv'
import EkoText from '../EkoNews/EkoNewsText'
import StoreCards from './StoreCards'
import { useEffect } from 'react'
import { get_all_categories } from '../../store/Actions/Product'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

const EkoStoreCOntainer = () => {
  const categories = useSelector(state => state.products.category)
  const dispatch = useDispatch()
  // useEffect(() => {
  //    dispatch(get_all_categories())
  // }, [])

  // //("container")

  return (
    <div className='bg-[#F6F6F6]'>
        <EkoText />
        <EkoNAv />
        <StoreCards />
    </div>
  )
}

export default EkoStoreCOntainer