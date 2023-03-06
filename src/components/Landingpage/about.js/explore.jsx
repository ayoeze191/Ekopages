import { ServiceCard } from "./serviceCard"
import assets from "../../../assets/landingpage/export"



export const Explore = () => {
    const services = [
        {
            title: "Eko learn",
            Icons: <img className="w-[20.28px] h-[20.28px] md:w-[32px] md:h-[32px]" src={assets.ekoLearn}/>,
            textStyle: {color:"#5A0C91"},
            content: "Subscribe to our affordable school and group packages to access our books, courses, quizzes and games",
            styles:{backgroundColor:"#E6DBEF"}
        },
        {
            title: "Eko Tales",
            Icons: <img className="w-[20.28px] h-[20.28px] md:w-[32px] md:h-[32px]" src={assets.ekoTale}/>,
            textStyle: {color:"#BB7C03"},
            content: "A weekly publication of children's stories, with themes that align with the sustainable development goals.",
            styles:{backgroundColor:"#FAE2B4"}
        },
        {
            title: "SDG Literacy Drive",
            Icons: <img className="w-[20.28px] h-[20.28px] md:w-[32px] md:h-[32px]" src={assets.sdgDrive}/>,
            textStyle: {color:"#3C5B73"},
            content: "This is a social initiative created to educate the African child on the SDGs using literature and other fun channels.",
            styles:{backgroundColor:"rgba(182, 224, 255, 0.5)"}
        },
        {
            title: "Book a Tutor",
            Icons: <img className="w-[20.28px] h-[20.28px] md:w-[32px] md:h-[32px]" src={assets.tutor}/>,
            textStyle: {color:"#679867"},
            content: "Parents and children will be able to book our certified tutors online to teach them about the Sustainable Development Goals.",
            styles:{backgroundColor:"rgba(195, 239, 194, 0.5)"}
        }
    ]
    
    
    return (<div className="font-lato w-[100%] text-center mt-[30px] section mb-[56px]">

        <p  className="font-[700] text-[24px] md:text-[44px] m-[0px] p-[0px]" > Explore our Services</p>
        <p className="text-[14px] md:text-[20px] font-[400] text-[#4A4A4A] m-[0px] p-[0px]  mb-[15px] ">Tap into our vault of resources to get the best Black-themed SDG themed books for children. </p>
        <section className="w-[100%] grid gap-x-[16px] gap-y-[24px] grid-cols-2 md:flex justify-around  ">

            {
                services.map((eachService) => <ServiceCard {...eachService}/> )
            }
           
        </section>
    </div>)
}