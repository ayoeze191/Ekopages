import { StoreItems } from './storeItem';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import assets from "../../../assets/landingpage/export"




//carousel configuration
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1200, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
}

//carousel custom right arrow
const CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button className="absolute right-[0px] w-[100px] h-[100px] bg-[#5A0C91] w-[86px] h-[78px] rounded-[80px]" onClick={() => onClick()} >
        <img src={assets.rightArrowBtn} alt="left arrow button"></img>
    </button>;
};

//carousel custom left arrow  
const CustomLeftArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button className="absolute w-[100px] h-[100px] bg-[#5A0C91] w-[86px] h-[78px] rounded-[80px]" onClick={() => onClick()} >
          <img src={assets.leftArrowBtn} alt="left arrow button"></img>
    </button>;
  };



  


const Store = () => {
    return (
        <div className=" section mb-[20px] font-lato  min-h-auto">
            <p className="text-center text-[43px] font-[700] mb-[10px] mt-[57px]">Eko Store</p>
        <section className=' flex justify-around flex-col md:flex-row gap-[27px]'>
          <StoreItems></StoreItems>
          <StoreItems></StoreItems>
      </section>
        
    </div>
    )
}


export default Store