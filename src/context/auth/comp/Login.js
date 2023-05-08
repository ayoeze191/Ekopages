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