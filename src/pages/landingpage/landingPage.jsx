//components
import { useLocation, useNavigate, useParams } from "react-router-dom"
import LandingComponent from "../../components/Landingpage/LandingContainer"
import Rodal from "rodal";
import instance from "../../axios";
import { useEffect, useState } from "react";
import { tokenConfig } from "../../Config/Config";




const LandingPage = () => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const nav = useNavigate()
  const referenceValue = urlSearchParams.get('reference');
    console.log(referenceValue)
  const [verificationSuccesfull, setVerificationSuccesfull] = useState(false)
  const VerifyPayment = () => {
      instance.get('/cart_payment/payment/verify/' + referenceValue, tokenConfig())
      .then((res)=> {
        setVerificationSuccesfull(true)
      })
      .catch((err) => setVerificationSuccesfull(false))
  }

  useEffect(() => {
    if(referenceValue){
      VerifyPayment()
    }
  }, [])

  return (
    <div className="box-border w-full ">
      <Rodal visible={verificationSuccesfull} onClose={() => {setVerificationSuccesfull(false); window.location.assign = 'ekopages.com' } }>
     <p className="font-lato text-center "> We have Received Your payment, thank you for your patronage</p>
      </Rodal>
          <LandingComponent></LandingComponent>
        </div>
       
    )
}


export default LandingPage