

const intialState = {
    showLoginModal: false,
    showSignupModal:false
}

const landingPageReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_MODAL_VISIBILITY":
            return ({
                ...state,
                showLoginModal:action.payload.showLoginModal
            })
        case "SIGNUP_MODAL_VISIBILITY":
            return ({
                ...state,
                showSignupModal:action.payload.showSignupModal
            })
        default:
            return {...state}
    }
    
    
}

export {
    intialState,
    landingPageReducer
}