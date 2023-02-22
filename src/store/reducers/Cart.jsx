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
    
})


export const {} = cartSlice.actions


export default cartSlice.reducer;

