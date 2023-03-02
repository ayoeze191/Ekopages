// registration/

import instance from "../../../axios";
import { tokenConfig } from "../../../Config/Config";
export const loginUser = (data) => {
    return instance.post('auth/login/', data)    
}


export const logoutUser = () => {
    return instance.get('auth/logout/', tokenConfig())
}