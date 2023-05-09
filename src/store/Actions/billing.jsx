import instance from "../../axios";
import { tokenConfig } from "../../Config/Config";
import { billing_sent, sending_bill } from "../reducers/billing";



export const create_billings = (data) => (dispatch) => {
    dispatch(sending_bill())
    instance.post("billing-details/create-billing-details/address/", data, tokenConfig())
    .then(res => {
        console.log(res)
        dispatch(billing_sent())
    })
    .catch((error) => {
        console.log(error)
    })
}


