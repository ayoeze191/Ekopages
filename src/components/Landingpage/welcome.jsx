import { useModalContext } from "../../context/modal/modal"
import { AdBx } from "./adBx"
import Group from "./../../assets/landingpage/Group.svg"


const WelcomeComponent = () => {
    const {setpartnerModal} = useModalContext()


    return (
        <div className="relative font-lato bg-backImg py-[40.11px] md:py-[80px] ">


            <div className="section flex justify-between items-center">
                <div className="flex flex-col">
                    <div className="">
                    <h1 className="text-[#ffffff] font-[700] text-[24px] md:text-[80px] md:font-[700] mb-[12px] md:leading-[5.5rem]">Education <span className="text-[#EFA30C] text-[15px] md:text-[40px]"> for </span> <br />  Sustainability</h1>
                    <p className="font-[500] text-[#D7D7D7] text-[12px] md:text-[20px] md:font-[400] font-lato mb-[20px] md:mb-[40px]">An “Edtech” Platform for Sustainability Literacy for <br/> Children through Literature, Animation and Courses.</p>
                    </div>
                <div className="flex gap-[1rem]">
                    <button className="bg-[#EFA30C] text-[#480A74] border-[#EFE7F4] text-[10px] md:text-[20px] rounded-[5px] md:rounded-[10px] border-[0.5px] md:px-[20px] md:py-[17px] px-[7.5px] py-[10.5px]">Explore Courses</button>
                    <button className="text-[white] border-[#EFE7F4] text-[10px] md:text-[20px] rounded-[5px] md:rounded-[10px] border-[0.5px] md:px-[20px] md:py-[17px] px-[7.5px] py-[10.5px]" onClick={() => setpartnerModal()}>Become a Partner</button>
                    {/* <button></button> */}
                </div>
                </div>
            <div className="w-[147.59px] h-[132.36px] md:w-[521px] md:h-[465px]"> <img src={Group} className="w-full h-full" /> </div>
            </div>

            {/* <AdBx></AdBx> */}
            </div>
    )
    
}

export default WelcomeComponent



{/* <div className='relative w-full h-[908px] bg-backImg flex  pt-[198px] pl-[8%] justify-between ' >
        <section className="">
            <h2 className="text-white font-bold text-[64px] mb-2 leading-tight ">
               <span className="font-bold font-Poppins  m-0 p-0"></span> 
                <span className="text-[35px] text-[#efa30c] ml-[5px]" ></span>
               
            </h2>
            <h2 className="leading-10 font-bold mb-10 text-white font-bold text-[64px]"> </h2>
            <p className="text-white font-Poppins">
                An “Edtech” Platform for Sustainability Literacy <br></br> for Children through Literature<br></br>
                Animation and Courses.
                
                </p>
                <div className="w-[100%] flex">
                    <button className="w-[216px] h-[59px] bg-[#EFA30C] rounded-[10px] mt-[20px] font-[20px] flex items-center justify-center text-[20px] text-[#480A74] font-latomedium">
                            Explore Courses
                    </button>
                    <button className=" ml-[10px] border border-white w-[216px] h-[59px]  rounded-[10px] mt-[20px] font-[20px] flex items-center justify-center text-[20px] text-white font-latomedium" onClick={() => setpartnerModal()}>Become a Partner</button>
                </div>
          
            
        </section>
        <section  className="bg-illustrate  w-[620px] h-auto object-cover  bg-no-repeat"></section>
    
            </div> */}