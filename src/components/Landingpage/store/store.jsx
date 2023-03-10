import { StoreItems } from './storeItem';
import { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { get_products } from '../../../store/Actions/Product';
import assets from "../../../assets/landingpage/export"
import { useDispatch, useSelector } from 'react-redux';
import StoreCard from '../../EkoStore/StoreCard';
import GeneralUiOverlayLoader from '../../ui/GeneralUiOverlayLoader';

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
  const store = useSelector(state => state.products)
  const disptach = useDispatch()

  useEffect(() => {
    disptach(get_products('All', "All"))
  }, [])
    return (
        <div className=" section mb-[20px] font-lato  min-h-auto mt-[49.78px]">
            <p className="text-center text-[24px] mdLtext-[44px] font-[700] mb-[10px] mt-[57px]">Eko Store</p>
            {store.isloading ? <GeneralUiOverlayLoader /> :store.products?
    <div className='sm:grid sm:grid-cols-2  md:grid-cols-3 mx-auto section gap-x-[2rem] gap-y-[12.25rem] items-center mb-[60px]'>
        {store.products.slice(0, 2).map((prod) => <StoreCard {...prod}/>)}
    </div>
    :<div className='h-[50vh] w-full text-center font-lato text-[2rem]'>Empty Product</div>
    }
    </div>
    )
}


export default Store