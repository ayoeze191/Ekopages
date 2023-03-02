import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import axios from "axios"
// import { get_all_doctors } from "../ActionTypes/ActionTypes"
// type fun = () => void



const initialState = {
    prodid: null,
    cart: null,
    loading: false,
    success: false,
    cartLoading: false

}  

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        
    }
})


export const {} = productSlice.actions


export default productSlice.reducer

