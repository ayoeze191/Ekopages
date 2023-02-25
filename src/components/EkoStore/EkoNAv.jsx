import React from 'react'
import NavItem from './NavItem'
import { useSelector, useDispatch } from 'react-redux'
import { get_all_categories } from '../../store/Actions/Product'
import { useEffect } from 'react'
const EkoNAv = () => {
  const navtem = [
    {id: "1", name: "Books"},
    {id: "2", name: "Clothes"},
  ]
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(get_all_categories())
    
  }, [])


  return (
    <div className='flex mt-[3.5rem] mx-auto w-fit mb-[12.75rem] '>
        <NavItem name="All" id="All"/>
        { navtem.map((item) =><NavItem {...item}/> )}
    </div>
  )
}

export default EkoNAv