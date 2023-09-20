import instance from "../../axios";
import { tokenConfig, VisitorTokenConfig } from "../../Config/Config";
import { billing_sent,
     sending_bill,
     billing_error } from "../reducers/billing";



export const create_billings = (data, isAuth) => (dispatch) => {
    //("creating billings")
    dispatch(sending_bill())
    if(isAuth.isAuth){
        instance.patch("billing-details/billing-details-update/", data, tokenConfig())
        .then(res => {
        //(res, "billing sent")
        dispatch(billing_sent())
    })
    .catch((error) => {
        //("billing_details")
        //(error)
    })}
    else{
        instance.post(`unregistered-billing-details/create-billing-details/address/${isAuth.session_id}/`, data, VisitorTokenConfig())
        .then((res) => {
            //(res.data)
            dispatch(billing_sent())
        })
        .catch((err) => {
            //(err, "biling _error")
            dispatch(billing_error())
        })
    }    
}






