import React from 'react'
import Product from './Product'
import Group300 from "./../../assets/whishlist/Group300.png"

const details = [
    {
        image: Group300,
        name: "Eko Hoodie",
        unitprice: "5,000",
        instock: true,
    },
    {   image: Group300,
        name: "Eko Hoodie",
        unitprice: "5,000",
        instock: true,
    }
]


const WishList = () => {
  return (
      <div>
    <section className="bg-[#5A0C91] h-[10.625rem] flex justify-center items-center font-lato bold">
    <div className=" py-4 mx-auto h-fit px-7 rounded-md text-[3rem] text-white font-[700]"> Wishlist </div>
    </section>
    <div>
    <div className='w-full mx-auto lg:px-0 px-6 max-w-[77rem] grid grid-cols-[400px_300px_minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_1fr)] border-b-solid border-b-[#C0C0C0] border-b-[1px] items-center py-[2.7rem]'>
        <div>PRODUCT NAME</div>
        <div>UNIT PRICE</div>
        <div>STOCK STATUS</div>
    </div>
    <div className='w-full  mx-auto lg:px-0 px-6 max-w-[77rem]'>
    {details.map((det) => <Product {...det}/>)} 
    </div>
    </div>
</div>
  )
}

export default WishList