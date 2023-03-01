import instance from "../../axios"
import { tokenConfig } from "../../Config/Config"
import { productError, productLoading, setcategories, setcategory, setproducts } from "../reducers/Products"

export const get_all_categories = () => (dispatch) => {
    //("getting")
    instance.get('store/category_list/', tokenConfig())
    .then(res => {
        //(res.data, "Our response")
        // dispatch(setcategories(res.data.data))
    }
    )
    .catch((err) => {
        //(err, "error wao")
    })
}



export const get_products = (id, name) => (dispatch) => {
    dispatch(setcategory(name))
    dispatch(productLoading())

    let url = `store/product_under_category/${id}`

    if( id === "All") {
        url = 'store/product_list/'
    }
    if (id === "merch") {
        url = 'store/merch_list/'
    }
    if(id === "books") {
        url = 'store/book_list/'
    }

    //(url)
    instance.get(url)
    .then(res => {
        //(res.data.data)
        dispatch(setproducts(res.data.data))
    })
    .catch((err) => {
        //(err)
        dispatch(productError())
    })
}



// const get_singleProduct = () => () => {

// }