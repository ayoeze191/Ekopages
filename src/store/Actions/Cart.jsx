// import axios from "axios"
import instance from "../../axios"
import { tokenConfig, VisitorTokenConfig } from "../../Config/Config"
import { added_to_cart, adding__to__Cart, 
getCart, getting_Cart,
get_total,
update_cart,
updating_cart } from "../reducers/Cart"
import axios from "axios"

import generateRandomString from "../../Utils/randomChar"

import { useCookies, withCookies } from "react-cookie"


export const get_cart = (isauth) => (dispatch) => {
    if(isauth.isAuth) {
        dispatch(getting_Cart())
        instance.get('cart/list', tokenConfig())
        .then((res) => {
            // console.log(res.data, "get cart")
            dispatch(getCart(res.data))
        })
        .catch((err) => {
            console.log(err, "error wa ni cart waooo")
        })
    }
    else {
        dispatch(getting_Cart())
        instance.get(`unregistered-cart/list/${isauth.session_id}`, VisitorTokenConfig(isauth.session_id))
        .then((res) => {
            console.log(res.data.data.list, "get unregisteredcart")
            dispatch(getCart(res.data.data.list))
        })
        .catch((err) => {
            // console.log(err.response, "get unregisteredcart")
            console.log(err, "error tiwaoo")
        })
        }
}



export const Add_to_cart = (id, isauth) => (dispatch) => {
    const data = {"product": id}

    if(isauth.isAuth) {
    dispatch(adding__to__Cart(id))
    instance.post(`cart/create/`, data , tokenConfig())
    .then(res => {
        console.log("added")
        console.log(res)
        dispatch(added_to_cart())
    })
    .catch((err) => {
        // console.log("Adding failed")
        // console.log(err)
        // dispatch(added_to_cart())
    })   
}

    else{
        instance.post(`unregistered-cart/create/${isauth.session_id}`, data, VisitorTokenConfig())
        .then(res => {
            console.log("unregistereradded")
            const headerArray = Object.entries(res.headers).map(([name, value]) => ({name, value}));
            // console.log(headerArray )
            // console.log(res)
            dispatch(added_to_cart())
        })
        .catch((err) => {
            console.log("")
            console.log(err, "Adding failed")
            dispatch(added_to_cart())
        })
    }
}

export const update_cart_items = (id, quantity, isauth) => (dispatch, getState) => {
    let present_cart = getState().cart.cart
    present_cart = present_cart.map(cart => cart.id === id? {...cart, quantity:quantity}:{...cart})
    dispatch(updating_cart())
    console.log("updating level 2", id)
    const url = `cart/cart-item/${id}/`
    const data = {quantity}
    if(isauth.isAuth){
    instance.patch(url, data, tokenConfig())
    .then((res) => {
        dispatch(update_cart(present_cart))
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })
    }
    else {
        instance.patch(`unregistered-cart/cart-item/${id}`, {quantity}, VisitorTokenConfig(isauth.session_id))
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    
}


// export const unauthenticated_update_cart_items = () =>


export const get_cart_total = (isauth) => (dispatch) => {
    // console.log("getTotalauth", isauth)
    if(isauth.isAuth) {
        instance.get('cart/total/', tokenConfig())
        .then((res) => {
            console.log(res, "getting")
            dispatch(get_total(res.data.data.total))
        })
        .catch(err => {
            console.log(err)
        } )
    }
    else {
        instance.get('unregistered-cart/total/', VisitorTokenConfig(isauth.session_id))
        .then((res) => {
            console.log(res, "unregistered")
            dispatch(get_total(res.data.data.total))
        })
        .catch(err => {
            console.log(err)
        } )
    }
}