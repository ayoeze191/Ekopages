import instance from "../../axios";
import { billing_sent, sending_bill } from "../reducers/billing";



const send_billing = (data) => (dispatch) => {
    dispatch(sending_bill())
    instance.post("billing-details/create-billing-details/address/")
    .then(res => {
        console.log(res)
    })
}