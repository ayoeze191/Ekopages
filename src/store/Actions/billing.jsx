import instance from "../../axios";
import { billing_sent, sending_bill } from "../reducers/billing";



const send_billing = () => (dispatch) => {
    dispatch(sending_bill())
    instance.get("billing-details/create-billing-details/address/")
    .then(res => {
        console.log(res)
    })
}