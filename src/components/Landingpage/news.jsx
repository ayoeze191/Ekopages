import assets from "../../assets/landingpage/export"
import { Carousel } from "react-responsive-carousel";
import {IoArrowForwardCircle,IoArrowBackCircleSharp} from "react-icons/io5"

//styles
import "react-responsive-carousel/lib/styles/carousel.min.css"; 


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
        <section  className="font-lato h-[720px] w-[100%] bg-[#5A0C91] p-[20px]">
            <p className="text-center text-[48px] text-white mb-[40px]">Eko News</p>
            <Carousel
                autoPlay={true}
                interval={5000}
                showIndicators={false}
                showThumbs={false}  
                showStatus={false}
                renderArrowPrev={(onClickHandler, hasPrev, label) => <button onClick={onClickHandler} style={{ ...arrowStyles, left: 6 }}>
                    <IoArrowBackCircleSharp  size={30}  color="white" ></IoArrowBackCircleSharp>
                </button> }
                renderArrowNext={(onClickHandler, hasNext, label) => <button onClick={onClickHandler} style={{ ...arrowStyles, right: 6 }}>
                    <IoArrowForwardCircle  size={30}  color="white" ></IoArrowForwardCircle>
                </button>}
            >
            <div className="w-[100%] h-[413px] flex  items-center justify-between pl-[6%] pr-[6%] border-box">
                <section className="w-[45%] h-auto  ">
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

                    <button type="button"
                        className=" block mr-auto w-[230px] h-[59px] bg-[#EFA30C] rounded mt-[30px] text-[24px] font-[500]">
                            Read More
                    </button>
                </section>
                <section className="w-[45%] h-[100%]">
                    <img className="w-[100%] h-[100%] object-cover"  src={assets.carouselImg} alt="sdg drive pictures" />
                </section>

                </div>
                
               
            </Carousel>
          
        </section>
    )
}