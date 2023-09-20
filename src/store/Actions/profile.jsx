import instance from "../../axios"
import { tokenConfig } from "../../Config/Config"
import { useAuthContext } from "../../context/auth/auth"
import { reseting_password, password_reset, password_reset_failed } from "../reducers/profils"




export const profile = (picture) => (dispatch) => {
    instance.put("auth/user/", {profile_picture: picture} ,tokenConfig())
    .then((res) => {
        
    })
    .catch(err => {
        //(err)
    })
}


// export const get_picture = () => () => {
//     instance.get('')
// }


export const setPAssword = ( data ) => (dispatch) => {
    //("resetting")
    dispatch(reseting_password())
    instance.post("auth/password/change/", data, tokenConfig())
    .then((res) => {
        //(res, "reseted")
        dispatch(password_reset(res.data.detail))
    })
    .catch((err) => {
        dispatch(password_reset_failed(err.response.data))
        //(err, "error in resetting")
    })
}

// https://ekopages-production.up.railway.app/auth/password/reset/confirm/