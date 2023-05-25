import React, {useState, useEffect} from 'react'
import instance from '../../../axios'
import { useSelector } from 'react-redux'



const useProduct = (id) => {
    const [product, setProduct] = useState(null)
    const [loading, setloading] = useState(false)
    // const cart = usec
    const cart = useSelector(state => state.cart)

    const get__product = () => {
        // // setloading(true)
        // const idPresent = cart.cart.filter((prod) => prod.product === id)
        // console.log(idPresent, "idpresent")
        // if(idPresent.length > 0) {
            instance.get(`store/product_detail/${id}`)
            .then((res) => {
                console.log("product success")
                // console.log(res.data)
                setProduct(res.data)
                setloading(false)
            })
            .catch((err) => {
                console.log(err, "product error")
            })
        // }  
    }

    useEffect(() => {
        get__product();
    }, [])


return {product, loading}
}

export default useProduct