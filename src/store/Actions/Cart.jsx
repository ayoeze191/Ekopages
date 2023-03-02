// import axios from "axios"
import instance from "../../axios"
import { tokenConfig } from "../../Config/Config"
import { added_to_cart, adding__to__Cart, getCart, getting_Cart, get_total } from "../reducers/Cart"
export const get_cart = () => (dispatch) => {
    // console.log("kemi")
    dispatch(getting_Cart())
    instance.get('cart/list', tokenConfig())
    .then((res) => {
        console.log(res.data, "get cart")
        dispatch(getCart(res.data))
    })
    .catch((err) => {
        console.log(err, "error tiwaoo")
    })
}



export const Add_to_cart = (id) => (dispatch) => {
    // console.log("adding")
    dispatch(adding__to__Cart(id))
    const data = {"product": id}
    instance.post(`cart/create/`, data , tokenConfig())
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


export const update_cart_items = (id, type) => (dispatch) => {
    instance.put(`cart/cart-item/${id}`)
    .then((res) => {
        
    })
}


export const get_cart_total = () => (dispatch) => {
    instance.get('cart/total/', tokenConfig())
    .then((res) => {
        console.log(res)
        dispatch(get_total(res.data.data.total))
    })
    .catch(err => {
        console.log(err)
    } )
}