import instance from "../../axios"
import { Config } from "../../Config/Config"
import { productError, productLoading, setcategories, setcategory, setproducts } from "../reducers/Products"

export const get_all_categories = () => (dispatch) => {
    console.log("getting")
    instance.get('store/category/', Config())
    .then(res => {
        console.log(res.data, "Our response")
        // dispatch(setcategories(res.data.data))
    }
    )
    .catch((err) => {
        console.log(err)
    })
}



export const get_products = (id, name) => (dispatch) => {
    dispatch(setcategory(name))
    dispatch(productLoading())
    let url = `store/product_under_category/${id}`
    if( id === "All") {
        url = 'store/product_list/'
    }

    console.log(url)
    instance.get(url)
    .then(res => {
        console.log("feteching product")
        // console.log(res.data.data)
        dispatch(setproducts(res.data.data))
    })
    .catch((err) => {
        console.log(err)
        dispatch(productError())
    })
}



// const get_singleProduct = () => () => {

// }