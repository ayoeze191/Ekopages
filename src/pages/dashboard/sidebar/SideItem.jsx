import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const SideItem = ({img, text, url, check}) => {
  return (
    <NavLink className='flex items-center justify-left gap-[1.45rem] pl-[3.8125rem] py-[1.18rem] font-[500] text-[1.25rem]'
     to={url} activeClassName="side_items"
     style={{ backgroundColor: check?`#5A0C91`:null, color: check?`#ffffff`:null}}
     >
        <div>{img}</div>
        <div>{text}</div>
    </NavLink>
  )
}
export default SideItem