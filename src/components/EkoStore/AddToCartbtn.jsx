import React from 'react'
import { BeatLoader } from "react-spinners"


const AddToCartbtn = ({isLoading, name, add}) => {
    return <button type="submit" className="font-[500] text-[#ffffff] text-[16px] md:text-[1rem] md:font-[700] px-[11px] py-[8px]  md:py-[10.5px] md:px-[27.5px]  bg-[#5A0C91] font-lato w-full mx-auto" style={{
        borderRadius: "10px 0px 8px 0px"
    }} onClick={() => add()}>
    {isLoading ? <BeatLoader color="#ffffff" ></BeatLoader> :name}
    
</button>
}

export default AddToCartbtn