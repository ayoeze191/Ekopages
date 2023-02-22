// registration/
import instance from "../../../axios";
import { Config } from "../../../Config/Config";

export const signUp = (data) => {
    return instance.post('registration/', data, Config())    
}

