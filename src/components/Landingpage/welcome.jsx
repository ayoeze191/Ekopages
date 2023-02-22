import { AdBx } from "./adBx"



const WelcomeComponent = () => {



    return (
        <div className="relative">
        <div className='relative w-full h-[908px] bg-backImg flex  pt-[198px] pl-[8%] justify-around ' >
        <section className="">
            <h2 className="text-white font-bold text-[64px] mb-2 leading-tight ">
               <span className="font-bold font-Poppins  m-0 p-0">Education</span> 
                <span className="text-[35px] text-[#efa30c] ml-[5px]" >for</span>
               
            </h2>
            <h2 className="leading-10 font-bold mb-10 text-white font-bold text-[64px]"> Sustainability</h2>
            <p className="text-white font-Poppins">
                An “Edtech” Platform for Sustainability Literacy <br></br> for Children through Literature<br></br>
                Animation and Courses.
                
                </p>
                <div className="w-[100%] flex">
                    <button className="w-[216px] h-[59px] bg-[#EFA30C] rounded-[10px] mt-[20px] font-[20px] flex items-center justify-center text-[20px] text-[#480A74] font-latomedium">
                            Explore Courses
                    </button>
                    <button className=" ml-[10px] border border-white w-[216px] h-[59px]  rounded-[10px] mt-[20px] font-[20px] flex items-center justify-center text-[20px] text-white font-latomedium">Become a Partner</button>
                </div>
          
            
        </section>
        <section  className="bg-illustrate  w-[620px] h-auto object-cover  bg-no-repeat"></section>
    
            </div>
            <AdBx></AdBx>
            </div>
    )
    
}

export default WelcomeComponent