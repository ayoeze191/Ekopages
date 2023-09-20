import { MeetTeamCard } from "./teamCard"
import images1 from "./../../assets/about/images1.png"
import images2 from "./../../assets/about/images2.png"
import {Swiper, SwiperSlide} from "swiper/react"
const teamDetails = [

    {
        'name': 'Tenn Zipa',
        'post': 'Team lead',
        img: images1
    },
    {
        'name': 'Yetunde Fadeyi',
        'post': 'C.O.O',
        img: images2
    },
    {
        'name': 'Mariam Olayiwola',
        'post': 'Head of Comms',
        img: images2
    },
    {
        'name': 'Melvin Enoch',
        'post': 'Creative Lead',
        img: images1
    },
    {
        'name': 'Olabode Ezekiel',
        'post': 'Frontend Developer',
        img: images1
    },
    {
        'name': 'Ayomide Emmanuel Adewale',
        'post': 'Bankend Engineer',
        img: images1
    },
]


export const MeetTeam = () => {
    

    return (
        <div className=" min-h-auto section mb-[10.875rem] mt-[56px]">
                <p className="text-center text-[1.5rem]  font-Poppins text-lg md:text-[2.75rem] font-[600]">Meet the team</p>
                <Swiper className=" gap-5 mx-auto w-full px-0 mt-10 grid grid-cols-2  lg:flex lg:flex-row justify-between" data-aos="zoom-out-up"
                slidesPerView={1}
                spaceBetween= {10.5}
                
                autoplay = {{pauseOnMouseEnter: true}}
                loop={true}
                breakpoints={{
                640: {
                    slidesPerView: 4,
                    spaceBetween: 50
                }
            }}
                >
                    {teamDetails.map((member) =>  <SwiperSlide><MeetTeamCard name={member.name} img={member.img} post={member.post}/></SwiperSlide>)}
                </Swiper>

        </div>
    )
}
