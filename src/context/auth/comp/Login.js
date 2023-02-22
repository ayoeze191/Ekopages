// registration/

import instance from "../../../axios";

export const loginUser = (data) => {
    return instance.post('auth/login/', data)    
}


