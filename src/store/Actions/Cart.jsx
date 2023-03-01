// import axios from "axios"
import instance from "../../axios"
import { tokenConfig } from "../../Config/Config"
import { added_to_cart, adding__to__Cart, getCart } from "../reducers/Cart"
export const get_cart = () => (dispatch) => {
    // console.log("kemi")
    instance.get('cart/cart', tokenConfig())
    .then((res) => {
        console.log(res, "get cart")
        getCart(res.data)
    })
    .catch((err) => {
        console.log(err, "error tiwaoo")
    })
}


export const Add_to_cart = (id) => (dispatch) => {
    console.log("adding")
    dispatch(adding__to__Cart(id))
    const data = {product: id}
    instance.post(`cart/cart`, data , tokenConfig())
    .then(res => {
        console.log("added")
        console.log(res)
        dispatch(added_to_cart())
    })
    .catch((err) => {
        console.log("Adding failed")
        console.log(err)
        dispatch(added_to_cart())
    })
}
