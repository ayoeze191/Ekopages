import React from 'react'
import NavHead from '../about/Navhead'
import Footers from '../footer/Footers'
import EkoNAv from './EkoNAv'
import EkoStoreText from './EkoStoreText'
import StoreCards from './StoreCards'
import { useEffect } from 'react'
import { get_all_categories } from '../../store/Actions/Product'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import instance from '../../axios'
import withErrorHandler from '../withErrHandler'

const EkoStoreCOntainer = () => {
  const categories = useSelector(state => state.products.category)
  const dispatch = useDispatch()
 

  return (
    <div className='bg-[#F6F6F6]'>
        <EkoStoreText />
        <EkoNAv />
        <StoreCards />
    </div>
  )
}
export default withErrorHandler(EkoStoreCOntainer, instance)