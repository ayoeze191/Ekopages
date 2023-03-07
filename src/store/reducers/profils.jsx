import { createSlice, PayloadAction } from "@reduxjs/toolkit"



const initialState = {
    passwordResetloading: false  ,
    passwordReseterror: null
}  

const ProfileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        reseting_password: (state, action) => {
            state.passwordResetloading = true
        },
        password_reset: (state,action) => {
            state.passwordResetloading = false
        },
        password_reset_failed: (state, action) => {
            state.passwordReseterror = action.payload
        }
    }
})


export const {reseting_password, password_reset, password_reset_failed} = ProfileSlice.actions


export default ProfileSlice.reducer;

