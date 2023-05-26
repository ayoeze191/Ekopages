import React from 'react'
import del from "./../../assets/cart/delete.png"

const Product = ({image, name, unitprice, instock}) => {
  return (
    <div className='grid grid-cols-5 grid-cols-[400px_300px_minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_1fr)] border-b-solid border-b-[#C0C0C0] border-b-[1px] py-[2.7rem] items-center font-lato font-[400] text-[1.25]'>
        <div className='flex items-center gap-[1.5rem] '><div><img src={image} alt="" /></div> {name}</div>
        <div>{unitprice}</div>
        <div>{instock?"instock":"out of stock"}</div>
        <div>Add to cart</div>
        <div><img src={del} alt="" /></div>
    </div>
  )
}

export default Product