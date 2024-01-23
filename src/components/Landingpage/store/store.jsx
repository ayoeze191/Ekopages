import { StoreItems } from './storeItem';
import { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { get_products } from '../../../store/Actions/Product';
import assets from "../../../assets/landingpage/export"
import { useDispatch, useSelector } from 'react-redux';
import StoreCard from '../../EkoStore/StoreCard';
import GeneralUiOverlayLoader from '../../ui/GeneralUiOverlayLoader';
import { useNavigate } from 'react-router-dom';

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

  


const Store = () => {
  const store = useSelector(state => state.products)
  const disptach = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    disptach(get_products('All', "All"))
  }, [])
    return (
        <div className="  mb-[20px] font-lato  min-h-auto mt-[49.78px]">
            <p className="text-center text-[24px] md:text-[44px] font-[700] mb-[60px] mt-[57px]">Eko Store</p>
            {store.isloading ? <GeneralUiOverlayLoader /> :store.products?
            <div>
    <div className=" flex flex-col sm:grid md:grid-cols-2  lg:grid-cols-3 mx-auto section gap-x-[2rem] gap-y-[5.25rem] items-center mb-[60px]">
      {store.products.slice(0, 6).map((prod) => (
        <StoreCard {...prod} />
      ))}
    </div>
    <div className=' w-full flex justify-center'>
    <button className='bg-[#5A0C91] text-[#E9E9E9] text-xl font-medium rounded-[5px]  font-lato px-[70px] py-[15px] mx-auto' onClick={() => navigate('/ekostore')}>
      Show all
    </button>
    </div>
    </div>
    
    :<div className='h-[50vh] w-full text-center font-lato text-[2rem]'>Empty Product</div>
    }
    </div>
    )
}


export default Store