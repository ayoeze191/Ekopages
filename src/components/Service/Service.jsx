import React, {useState} from "react";
import { Link } from "react-router-dom";
import { Shimmer, Image } from "react-shimmer";
import SkeletonsElement from "../ui/skeletons/SkeletonsElement";

const Service = ({ img, h, p, button, imagefirst, url }) => {
  const [loaded, setLoaded] = useState(false) 


  return imagefirst ? (
    <div className="flex flex-row gap-[15px] lg:gap-[3rem] font-lato items-center relative">
      <div className="rounded-lg w-[50%] lg:w-[65%] h-[100%] md:h-[450px]">
      
            {!loaded?<SkeletonsElement type={'images'} />:null}
         <img src={img} alt=""  className="h-full w-full rounded-lg" onLoad={() => setLoaded(true)}/>
      </div>
      <div className=" w-1/2">
        <h1 className="text-[#232E52] mb-[0.5rem] lg:mb-[1rem] font-[700] text-[18px] lg:text-[2.25rem]">
          {h}
        </h1>
        <p className="text-[#232E52] mb-[1rem] lg:mb-[2rem] font-[400] text-[14px] lg:text-[1.15rem]">
          {p}
        </p>
        <Link
          className={`${button === 'coming soon'?'bg-[#888]':"bg-[#5A0C91]"} text-[#EFE7F4] py-[0.75rem] px-[1.25rem] rounded-md text-[10px] lg:text-[1rem]`}
          to={url}
        >
          {button}
        </Link>
      </div>
    </div>
  ) : (
    <div
      className="flex flex-row gap-[15px] lg:gap-[3rem] font-lato items-center"
      to={url}
    >
      <div className=" w-1/2">
        <h1 className="text-[#232E52] mb-[0.5rem] lg:mb-[1rem] font-[700] text-[18px] lg:text-[2.25rem]">
          {h}
        </h1>
        <p className="text-[#232E52] mb-[1rem] lg:mb-[2rem] font-[400] text-[14px] lg:text-[1.15rem]">
          {p}
        </p>
        <Link
          className={`${button === 'coming soon'?'bg-[#888]':"bg-[#5A0C91]"} text-[#EFE7F4] py-[0.75rem] px-[1.25rem] rounded-md text-[10px] lg:text-[1rem]`}
          to={url}
        >
          {button}
        </Link>
      </div>
      <div className="rounded-lg w-[40%] lg:w-[65%]  h-[100%]">
        <Image
          src={img}
          alt=""
          className="h-full "
          fallback={<Shimmer width={300} height={300} />}
        />
      </div>
    </div>
  );
};

export default Service;
