import React, {useState, useEffect} from 'react'
import instance from '../../../axios'
import { useSelector } from 'react-redux'



const useProduct = (id) => {
    const [product, setProduct] = useState(null)
    const [loading, setloading] = useState(true)
    // const cart = usec
    const cart = useSelector(state => state.cart)

    const get__product = () => {
            instance.get(`store/product_detail/${id}`)
            .then((res) => {
                console.log("product success")
                // console.log(res.data)
                setProduct(res.data)
                setloading(false)
            })
            .catch((err) => {
                console.log(err, "product error")
                setloading(false)
            })
        // }  
    }

    useEffect(() => {
        get__product();
    }, [])


return {product, loading}
}

export default useProduct