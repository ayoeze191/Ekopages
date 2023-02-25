import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import axios from "axios"
// import { get_all_doctors } from "../ActionTypes/ActionTypes"
// type fun = () => void



const initialState = {
    cart: "",
    
}  

const cartSlice = createSlice({
    name: "carts",
    initialState,
    reducers: {
        getCart: (state, action) => {
           state.cart = action.payload
            // state.category = action.payload.category
        },
    }
})


export const {getCart} = cartSlice.actions


export default cartSlice.reducer;

