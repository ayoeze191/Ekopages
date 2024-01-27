import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import axios from "axios"
// import { get_all_doctors } from "../ActionTypes/ActionTypes"
// type fun = () => void

// this state is for the dashboard url so as to know the current page after navigating to the,

const initialState = {
    loading: false, 
    success: false,
    error: "",
    url: "",
    shipping_locations:[],
    selected_shipping_locations: null,
}  
// report item damage
const billingSlice = createSlice({
    name: "billing",
    initialState,
    reducers: {
        sending_bill: (state, action) => {
            state.loading = true
        },
        billing_sent: (state,action) => {
            state.loading = false
        },
        billing_error: (state, action) => {
            state.error = action.payload
        },
        swictchUserCourseUrl: (state, action) => {
            state.url = action.payload   
        },
        setbillinglocations: (state, action) => {
            state.shipping_locations = action.payload
        },
        selectbillingLocation: (state, action) => {
            state.selected_shipping_locations = action.payload
        }
    }
})


export const {sending_bill, billing_sent, billing_error, swictchUserCourseUrl, selectbillingLocation, setbillinglocations} = billingSlice.actions


export default billingSlice.reducer;

