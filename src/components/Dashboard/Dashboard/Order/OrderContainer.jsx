import React from 'react'
import { Routes, Route } from 'react-router-dom'
import OrderDetail from './OrderDetail'
import Orders from './Orders'
const OrderContainer = () => {
  return (
   <Routes>
       <Route element={<Orders />} path={"/"}/>
       <Route element={<OrderDetail />} path={"/orderdetails"}/>
       
   </Routes>
  )
}

export default OrderContainer