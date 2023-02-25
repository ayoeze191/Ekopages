// import axios from "axios"
import instance from "../../axios"
import { Config } from "../../Config/Config"
import { getCart } from "../reducers/Cart"
export const get_cart = () => (dispatch) => {
    instance.get('cart/cart', Config())
    .then((res) => {
        console.log(res, "get cart")
        getCart(res.data)
    })
    .catch((err) => {
        console.log(err)
    })
}
