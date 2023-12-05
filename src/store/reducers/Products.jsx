import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import axios from "axios"
// import { get_all_doctors } from "../ActionTypes/ActionTypes"
// type fun = () => void



const initialState = {
    products: null,
    category: null,
    categories: [],
    isloading: false,
    error: null,
    product: null,
    url: ""
}  

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setproducts: (state, action) => {
            state.products = action.payload
            state.isloading = false
        },
        setcategories: (state, action) => {
            state.category = action.payload
            state.isloading = false
        },
        setcategory: (state, action) => {
            state.category = action.payload
        },
        productLoading: (state, action) => {
            state.isloading = true
        },
        productError: (state, action) => {
            state.error = action.payload
            state.isloading = false
            state.products = null
        },
        
    },
})


export const {setproducts,  productLoading, setcategories, productError, setcategory, swictchUserCourseUrl} = productSlice.actions


export default productSlice.reducer;

