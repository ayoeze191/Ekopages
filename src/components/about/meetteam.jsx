import { MeetTeamCard } from "./teamCard"
import images1 from "./../../assets/about/images1.png"
import images2 from "./../../assets/about/images2.png"
import {Swiper, SwiperSlide} from "swiper/react"
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay])
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
        'name': 'Oyinda Ahmed',
        'post': 'Product Desginer/ Manager',
        img: images1
    },
    {
        'name': 'Lateefah Rufai',
        'post': 'Product Desginer/ Manager',
        img: images1
    },
    {
        'name': 'Olabode Ezekiel',
        'post': 'Frontend Developer',
        img: images1
    },
    {
        'name': 'Ayomide Adewale',
        'post': 'Bankend Engineer',
        img: images1
    },
]


export const MeetTeam = () => {
    

    return (
        <div className=" min-h-auto section mb-[10.875rem] mt-[56px]  grid grid-cols-2 md:grid-cols-4 gap-[48px]">
                    {teamDetails.map((member) =>  <MeetTeamCard name={member.name} img={member.img} post={member.post}/>)}
        </div>
    )
}
