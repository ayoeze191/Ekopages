import { Divider } from "antd"
import assets from "../../../assets/landingpage/export"
import {AiOutlineHeart} from "react-icons/ai"



export const StoreItems = () => {
    

    return (
        <div className="w-full  md:w-[400px] h-[524px] relative">
            <section className="flex w-[100%] justify-center relative z-[100]">
                <img className="w-[125px] h-[178px]" src={assets.cartItemsImg} alt="" />
                <img className="w-[125px] h-[178px]" src={assets.cartItemsImgRight} alt="" />
            </section>

            <section className=" p-[10px] w-[100%] h-[420px] bg-[#EFEBF2] absolute top-[100px] rounded-t-[150px] rounded-b-[50px]">
                
                <section className="top-[80px] relative ml-[5%] mr-[5%] ">
                <div className="flex justify-between  ">
                    <section className="font-lato text-[#232323]" >
                        <p className="text-[23px] font-[700]   ">King Hauwa</p>
                        <p className="text-[18px] ">Written by: Tenn Zipa J.</p>
                        <p className="text-[#247A00] text-[20px]">In Stock</p>
                        <p>
                            <span>Category:</span>
                            <span className="text-[12px]">Books</span>
                        </p>
                      
                    </section>
                    <section>
                         <p><AiOutlineHeart size={30}></AiOutlineHeart></p>
                    </section>

                    </div>
                    <br></br>
                   <Divider></Divider>
                    <section className="relative">
                
                    <div  className="flex justify-between " >
                    
                        <p  className="flex justify-between items-center"> <img src={assets.NairaSym} alt="" /> <span className="text-[27px] pt-[7px]">700</span></p>
                        <button className="w-[120px] h-[40px] bg-[#5A0C91] rounded text-white">Add to Cart</button>
                </div>
                </section>
                </section>
               
                
                
                
                

              
            </section>
           
        </div>
    )
}