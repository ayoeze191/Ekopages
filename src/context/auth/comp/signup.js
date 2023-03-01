// registration/
import instance from "../../../axios";
import { tokenConfig } from "../../../Config/Config";

export const signUp = (data) => {
    return instance.post('registration/', data, tokenConfig())    
}

