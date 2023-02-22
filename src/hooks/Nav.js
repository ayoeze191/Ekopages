import {useReducer} from "react"
//reducer
import { intialState, landingPageReducer } from "../reducer/Nav"



const useLogic = () => {
    const [state, dispatch] = useReducer(landingPageReducer,intialState)
    
//handle login modal visibility
    const handleLoginModalVisibility = (state) => {
        console.log("working")
        if (state.showLoginModal === false) return(
            dispatch({ type: "LOGIN_MODAL_VISIBILITY", payload: { showLoginModal: true } }))
        dispatch({ type: "LOGIN_MODAL_VISIBILITY", payload: { showLoginModal: false } })
} 

//handle signup modal visibility
const handleSignupModalVisibility = (state) => {
    console.log("working")
        if (state.showSignupModal === false) return(
            dispatch({ type: "SIGNUP_MODAL_VISIBILITY", payload: { showSignupModal: true } }))
        dispatch({ type: "SIGNUP_MODAL_VISIBILITY", payload: { showSignupModal: false } })
} 
    

    return {
        state,
        handleLoginModalVisibility,
        handleSignupModalVisibility
    }
    
}


export default useLogic

