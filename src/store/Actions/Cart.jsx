// import axios from "axios"
import instance from "../../axios"
import { tokenConfig } from "../../Config/Config"
import { added_to_cart, adding__to__Cart, getCart, getting_Cart, get_total } from "../reducers/Cart"
export const get_cart = (isauth) => (dispatch) => {
    // console.log("kemi")
    
    if(isauth) {
        dispatch(getting_Cart())
        instance.get('cart/list', tokenConfig())
        .then((res) => {
            // console.log(res.data, "get cart")
            dispatch(getCart(res.data))
        })
        .catch((err) => {
            console.log(err, "error tiwaoo")
        })
    }
    else {
        dispatch(getting_Cart())
        instance.get('unregistered-cart/list/')
        .then((res) => {
            console.log(res.data, "get cart")
            dispatch(getCart(res.data))
        })
        .catch((err) => {
            console.log(err, "error tiwaoo")
        })
    }
}



export const Add_to_cart = (id, isauth) => (dispatch) => {
    const data = {"product": id}
    if(isauth) {
        
    dispatch(adding__to__Cart(id))
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

    else{
        instance.post('unregistered-cart/create/', data)
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

}

export const update_cart_items = (id, quantity, isauth) => (dispatch) => {
    console.log("updating level 2")
    if(isauth){
    instance.put(`cart/cart-item/${id}`, {quantity}, tokenConfig())
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })
    }
    else {
        instance.put(`unregistered-cart/cart-item/${id}`, {quantity})
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
    console.log("getTotalauth", isauth)
    if(isauth) {
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
        instance.get('unregistered-cart/total/')
        .then((res) => {
            console.log(res, "unregistered")
            dispatch(get_total(res.data.data.total))
        })
        .catch(err => {
            console.log(err)
        } )
    }
   
}