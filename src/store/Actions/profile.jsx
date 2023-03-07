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
    console.log("resetting")
    dispatch(reseting_password())
    instance.post("auth/password/change/", data, tokenConfig())
    .then((res) => {
        console.log(res, "reseted")
        dispatch(password_reset(res.data.detail))
    })
    .catch((err) => {
        dispatch(password_reset_failed(err.response.data))
        console.log(err, "error in resetting")
    })
}

// https://ekopages-production.up.railway.app/auth/password/reset/confirm/