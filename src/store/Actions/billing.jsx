import instance from "../../axios";
import { tokenConfig, VisitorTokenConfig } from "../../Config/Config";
import { billing_sent,
     sending_bill,
     billing_error } from "../reducers/billing";



export const create_billings = (data, isAuth) => (dispatch) => {

    dispatch(sending_bill())
    if(isAuth.isAuth){
        instance.patch("billing-details/billing-details-update/", data, tokenConfig())
        .then(res => {
        console.log(res, "billing sent")
        dispatch(billing_sent())
    })
    .catch((error) => {
        console.log("billing_details")
        console.log(error)
    })}
    else{
        instance.post("billing-details/billings-update/", data, VisitorTokenConfig())
        .then((res) => {
            console.log(res.data)
            dispatch(billing_sent())
        })
        .catch((err) => {
            console.log(err, "biling _error")
            dispatch(billing_error())
        })
    }    
}
