import React from 'react'
import { BeatLoader } from "react-spinners"


const AddToCartbtn = ({isLoading, name, add}) => {
    return <button type="submit" className="font-[600] text-[#ffffff] text-[17.6px] md:text-[1rem] font-[700] py-[10.5px] px-[33px] rounded-[8px] bg-[#5A0C91] font-lato w-fit mx-auto" onClick={() => add()}>
    {isLoading ? <BeatLoader color="#ffffff" ></BeatLoader> :name}
    
</button>
}

export default AddToCartbtn