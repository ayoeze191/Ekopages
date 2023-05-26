


export const initialState = {
    showPassword: false,
    showCOnfirmPassword:false
}

export const signupReducer = (state, action) => {
    switch (action.type) {
        case "SHOW_PASSWORD_VALUE":
            return {
                ...state,
                showPassword:action.payload.showPassword
            }
        case "SHOW_CONFIRM_PASSWORD_VALUE":
            return {
                ...state,
                showCOnfirmPassword:action.payload.showCOnfirmPassword
            }
    }
    
}





