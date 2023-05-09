import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import axios from "axios"
// import { get_all_doctors } from "../ActionTypes/ActionTypes"
// type fun = () => void



const initialState = {
    prodid: null,
    cart: null,
    loading: false,
    success: false,
    cartLoading: false,
    error:null,
    total: null,
    update_loading: false,
    total_loading: false
}  

const cartSlice = createSlice({
    name: "carts",
    initialState,
    reducers: {
        getCart: (state, action) => {
           state.cart = action.payload
           state.cartLoading = false
           state.error = null
            // state.category = action.payload.category
        },
        adding__to__Cart: (state, action) => {
            state.loading = true
            state.success = false
            state.prodid = action.payload
            state.error = null
        },
        added_to_cart: (state,action) => {
            state.loading = false
            state.success = true
        },
        finished_adding: (state, action) => {
            state.loading = false
            state.success = false
            state.error = null
            state.prodid = null
        },
        getting_Cart: (state,action) => {
            state.cartLoading = true
        },
        get_total: (state,action) => {
            state.total = action.payload
            state.total_loading = false
        },
        getting_total: (state) => {
            state.total_loading = true
        },
        updating_cart: (state, action) => {
            state.cartLoading = true
        },
        update_cart: (state, action) => {
            state.cart = action.payload
            state.cartLoading = false
        },
        add_failed: (state, action) => {
            state.error = action.payload
        }
    }
})


export const {getCart, adding__to__Cart, added_to_cart, finished_adding, getting_Cart, get_total, update_cart, updating_cart, add_failed, getting_total} = cartSlice.actions


export default cartSlice.reducer;

