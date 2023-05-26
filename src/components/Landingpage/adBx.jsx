import {AiOutlineCloseCircle} from "react-icons/ai"


export const AdBx = () => {
    


    return <section className=" z-10 right-[4%] rounded bg-[#CCB4DD78]  bottom-[0px] fixed w-[300px] h-[300px]">
        <div className="flex justify-between">
        <span
            className="flex justify-center items-center text-[#DD3D08] text-[20px] font-[700] w-[44px] h-[42px] bg-white  rounded-tl-[5px] ">
            AD
         </span>

        <button type="button" className="relative right-[10px]">
                <AiOutlineCloseCircle size={30}></AiOutlineCloseCircle>
        </button>
        </div>
        <div className="mt-[10px] ">
            <p
                className="  w-[70px] pt-[15px] text-[20px] font-[700] h-[70px] rounded-[70px] bg-[#5A0C91] ml-[auto] mr-[10px] text-white">
               <p className="text-center m-[0px] p-[0px] leading-none">50%</p>  
                <p className="text-center m-[0px] p-[0px]  leading-[25px]" >Off</p>            
        </p>
        </div>

        <div></div>
       
    </section>
}