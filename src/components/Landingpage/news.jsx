import assets from "../../assets/landingpage/export"
import { Carousel } from "react-responsive-carousel";
import {IoArrowForwardCircle,IoArrowBackCircleSharp} from "react-icons/io5"

//styles
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Link } from "react-router-dom";


const arrowStyles = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    width: 30,
    height: 30,
    cursor: 'pointer',
};




export const EkoNews = () => {
    



    return (
        <section  className="font-lato w-[100%] bg-[#5A0C91] p-[20px] mt-[55.9px] ">
            <div className="section">
            <p className="text-center text-[24px] font-[700]  md:text-[44px] text-white mb-[40px] mt-[40px]">Eko News</p>
            <Carousel
                autoPlay={true}
                interval={5000}
                showIndicators={false}
                showThumbs={false}  
                showStatus={false}
                renderArrowPrev={(onClickHandler, hasPrev, label) => <button onClick={onClickHandler}  className="absolute z-[2] top-[70%] md:top-[50%] w-[30px] h-[30px] cursor-pointer left-[6px]">
                    <IoArrowBackCircleSharp  size={30}  color="white" ></IoArrowBackCircleSharp>
                </button> }
                renderArrowNext={(onClickHandler, hasNext, label) => <button onClick={onClickHandler}  className="absolute z-[2] top-[70%] md:top-[50%] w-[30px] h-[30px] cursor-pointer right-[6px]">
                    <IoArrowForwardCircle  size={30}  color="white" ></IoArrowForwardCircle>
                </button>}
            >
            <div className="w-[100%] h-fit flex  flex-col md:flex-row items-center justify-between pl-[6%] pr-[6%] border-box">
                <section className="md:w-[45%] h-auto  ">
                    <p className="text-[12px] text-left text-white font-[400]">
                    BLOGS
                    </p>
                    <p className="text-[36px] text-left text-white font-[700]">
                    SDG Literacy Drive

                    </p>
                    <p className="text-white text-left text-[16px] font-[400]">
                    Championing the project to inculcate Literature books on sustainability and the SDGs in to the Federal curriculum, our book, Jemima and the Wind Turbine headlines the SDG Literacy Drive project across the 6 geo-political zones in Nigeria.
                    </p>
                    <ul className="text-white text-left text-[14px] font-[600]  mt-[10px]">
                        <li>19 Aug, 2022</li>
                    </ul>

                    <button type="button" className=" block mr-auto w-[230px] h-[59px] bg-[#EFA30C] rounded mt-[30px] text-[24px] font-[500]">
                        <Link to={'ekonews/sdg'}>
                            Read More
                        </Link>
                    </button>
                </section>
                <div className=" w-[280px] h-[413px] md:w-[55%]">
                    <img className="w-full h-full"  src={assets.carouselImg} alt="sdg drive pictures" />
                </div>

                </div>

                <div className="w-[100%] flex  flex-col md:flex-row items-center justify-between pl-[6%] pr-[6%] border-box">
                <div className="md:w-[45%]">
                    <p className="text-[12px] text-left text-white font-[400]">
                    BLOGS
                    </p>
                    <p className="text-[36px] text-left text-white font-[700]">
                    SDG Literacy Drive

                    </p>
                    <p className="text-white text-left text-[16px] font-[400]">
                    Championing the project to inculcate Literature books on sustainability and the SDGs in to the Federal curriculum, our book, Jemima and the Wind Turbine headlines the SDG Literacy Drive project across the 6 geo-political zones in Nigeria.
                    </p>
                    <ul className="text-white text-left text-[14px] font-[600]  mt-[10px]">
                        <li>19 Aug, 2022</li>
                    </ul>

                    <button type="button" className=" block mr-auto w-[230px] h-[59px] bg-[#EFA30C] rounded mt-[30px] text-[24px] font-[500]">
                        <Link to={'ekonews/sdg'}>
                        
                            Read More
                        </Link>
                    </button>
                </div>
                <div className=" w-[280px] h-[413px] md:w-[55%]">
                    <img className="w-full h-full"  src={assets.carouselImg} alt="sdg drive pictures" />
                </div>

                </div>
                
                
               
            </Carousel>
            </div>
        </section>
    )
}