


export const initialState = {
    showPassword: false,
    isSubmitting: false,
    
}

export const LoginReducer = (state, action) => {
    switch (action.type) {
        case "SHOW_PASSWORD_VALUE":
            return {
                ...state,
                showPassword:action.payload.showPassword
            }
        case "IS_SUBMITTING":
            return {
                ...state,
                isSubmitting:action.payload.isSubmitting
            }
    }
    
}

