import React, { useEffect, useState } from "react";
import uil_info_circle from "./../../../../assets/Service/uil_info_circle.png";
import { service } from "../../Services";
import { redirect, useNavigate } from "react-router-dom";
import instance from "../../../../axios";
import { BiLoaderCircle } from "react-icons/bi";
import { tokenConfig } from "../../../../Config/Config";
import { useAuthContext } from "../../../../context/auth/auth";
import hasSubscriptionExpired from "../../../../Utils/hasSubscriptionExpired";
const EkoLearnAbout = () => {
  const [loadingPayment, setLoadingPayment] = useState(false)
  const {user} = useAuthContext()
  const navigate = useNavigate(false);
  const handleClick = () => {
    setLoadingPayment(true)
    if (eligible) {
      navigate("/dashboard/MyCourses")
      setLoadingPayment(false);
    } else {
      const data =  {"email": user.email, "amount": 15000}
      instance.post("/dashboard-payment/payment/", data ,tokenConfig())
      .then((res) => {
        console.log(res);
        setLoadingPayment(false);
        window.location.assign(res.data.data.data.authorization_url);
      })
      .catch((err) => {
        // console.log(err.response, "my response")
      })
    }
  };
  const [eligible, setEligible] = useState(false)
  const [expired, setExpired] = useState(false)

  const getDateExpired = () => {
    instance.get('auth/user', tokenConfig())
    .then((res) => {
      console.log(res)
      console.log(hasSubscriptionExpired(res.data.subscription_start_dates, res.data.subscription_end_dates))
      if(hasSubscriptionExpired(res.data.subscription_start_dates, res.data.subscription_end_dates) === "Current Subscriber"){
          setEligible(true)
      }
      else if(hasSubscriptionExpired(res.data.subscription_start_dates, res.data.subscription_end_dates) === "current subscription has expired"){
        setExpired(true)
        setEligible(false)
      }
      else {
        setEligible(false)
      }
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getDateExpired();
  }, [])

  return (
    <div className="font-lato flex gap-[3.25rem] section items-center flex-col md:flex-row">
      <div className="rounded-[10px] w-full md:w-[50%]">
        <img src={service[0].img} alt="" className="w-full" />
      </div>
      <div className="font-[400] text-[#444444] md:text-[20px] text-[13px] w-full md:w-[50%]">
        {" "}
        <p>
          {" "}
          This is a subscription-based platform for schools to subscribe their
          students to. Each School can register as many as 10,000 students on
          Eko Learn for N15,000 each per year.
        </p>
        <div className="w-full flex justify-between items-center my-[3rem]">
          <p className="text-[20.67px] md:text-[2rem] font-[600]">
            {" "}
            {!eligible && "#15000"}{" "}
          </p>{" "}
          <button
            className={`${eligible?"bg-green-900":"bg-[#5A0C91]"} py-[9.25px] px-[18.5px] md:py-[0.9375rem] md:px-[1.9375rem] text-white rounded-[10px] text-[14.4px] md:text-[24px] font-[500] md:font-[400] `}
            onClick={handleClick}
          >
            {!eligible ? "Subscribe Now" : loadingPayment?<BiLoaderCircle width={20} color="purple"/>: "Continue"}
          </button>
        </div>
        {expired&&<div className="text-red-900">Currrent subscription has expired</div>}
        <div className="px-[1.6rem] py-[2.0625rem] rounded-[10px] bg-[#EFE7F4] text-[1rem] flex items-start">
          <div className="flex gap-[1.6rem] items-center mb-[0.5rem] mr-[39.67px]">
            <img src={uil_info_circle} alt="" />
          </div>
          <div className="">
            <span className="text-left realtive -ml-5 text-[12px] md:text-[1rem] font-[700]">
              Eko Learn subscription pack includes the following;
            </span>
            <ul className="list-disc font-[400] text-[12px] md:font-[400] md:text-[1rem]">
              <li>5 SDG-themed books with exercises for the children.</li>
              <li>100 SDG pop-quizzes.</li>
              <li>
                1 curated beginner SDG course for children with certification.
                OR
              </li>
              <li>
                1 curated beginner SDG teaching training course for teachers
                with certification.
              </li>
              <li>3 Short stories and exercises.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EkoLearnAbout;
