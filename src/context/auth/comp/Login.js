// registration/

import instance from "../../../axios";
import { tokenConfig } from "../../../Config/Config";
export const loginUser = (data) => {
    
    return instance.post('auth/login/', data, {
        withCredentials: false,
    })    
}


export const logoutUser = () => {
    return instance.post('auth/logout/', tokenConfig())
}


export const refreshToken = () => {
    const refresh = localStorage.getItem('eko_refresh')
    return instance.post('auth/token/refresh/', {refresh})
}