import { createSlice, PayloadAction } from "@reduxjs/toolkit"



const initialState = {
    passwordResetloading: false  ,
    passwordReseterror: null,
    password_reset_success: null,
    profile_picture: null,
    propicloading: false
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
            state.password_reset_success = action.payload
        },
        password_reset_failed: (state, action) => {
            state.passwordReseterror = action.payload
            state.passwordResetloading = false
        },
        clear_all: (state, action) => {
            state.passwordReseterror = null
            state.passwordResetloading = false
            state.password_reset_success = null
        },

        setting_profilePic: (state, action) => {
            state.propicloading = true
        },
        setProfilePic: (state,action) => {
            state.profile_picture = action.payload
            state.propicloading = false
        }
    }
})


export const {reseting_password, password_reset, password_reset_failed, setProfilePic, setting_profilePic} = ProfileSlice.actions


export default ProfileSlice.reducer;

