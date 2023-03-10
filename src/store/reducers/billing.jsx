import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import axios from "axios"
// import { get_all_doctors } from "../ActionTypes/ActionTypes"
// type fun = () => void



const initialState = {
    loading: false  
}  

const billingSlice = createSlice({
    name: "billing",
    initialState,
    reducers: {
        sending_bill: (state, action) => {
            state.loading = true
        },
        billing_sent: (state,action) => {
            state.loading = false
        }
    }
})


export const {sending_bill, billing_sent} = billingSlice.actions


export default billingSlice.reducer;

