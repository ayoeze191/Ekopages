import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import instance from '../../../axios'
import uil_info_circle from "./../../../assets/Service/uil_info_circle.png"
import Loader from "./../../../components/ui/Loader/Loader"
import Book from './Book'
const StoreDetails = () => {
    const [product, setProduct] = useState()


    const {id} = useParams()


    const  getproducts = async () => {
        const {data} = await instance.get(`store/product_details/${id}/`)
        setProduct(data.data)
    }

    //(product, "productdetails")

    useEffect(() => {
        getproducts()
    }, [])


    let Store = <Loader />

    if(product) {
        if(product.category == 1) {
            
            Store = <Book {...product}/>
        }

    }



  return (
    Store
  )
}

export default StoreDetails