import instance from "../../axios"
import { tokenConfig } from "../../Config/Config"
import { reseting_password, password_reset, password_reset_failed } from "../reducers/profils"

export const profile = () => (picture) => {
    instance.put("auth/user/", {profile_picture: picture} ,tokenConfig())
    .then((res) => {

    })
    .catch(err => {
        console.log(err)
    })
}


export const setPAssword = ( data ) => (dispatch) => {
    dispatch(reseting_password())
    instance.put("auth/password-reset/", data, tokenConfig())
    .then((res) => {
        console.log(res)
        dispatch(password_reset())
    })
    .catch((err) => {
        dispatch(password_reset_failed(err.response.data.error))
        console.log(err)
    })
}