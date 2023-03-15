import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { get_products } from '../../store/Actions/Product'
const NavItem = ({name, id}) => {
    const dispatch  = useDispatch()
    const category = useSelector(state => state.products.category)
const clickHandler = (id) => {
    dispatch(get_products(id, name))
}
const  capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
//(category)

  return (
    <button className='w-[5rem] h-[1.5rem] md:w-[7.75rem] md:h-[2.125rem]  font-lato rounded-[3.2px] font-[400] text-[12px] md:text-[1rem]' style={{backgroundColor: category === name?"#5A0C91":null, color: category === name?"#ffffff":null}} onClick={() => clickHandler(id)}>
      {capitalizeFirstLetter(name)}
      </button>
  )
}

export default NavItem