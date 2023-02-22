import React from 'react'
import NavItem from './NavItem'
import { useSelector } from 'react-redux'
const EkoNAv = () => {
  const navtem = [
    {id: "1", name: "Books"},
    {id: "2", name: "Clothes"},
  ]



  return (
    <div className='flex mt-[3.5rem] mx-auto w-fit mb-[12.75rem]'>
        <NavItem name="All" id="All"/>
        { navtem.map((item) =><NavItem {...item}/> )}
    </div>
  )
}

export default EkoNAv