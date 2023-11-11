import React from "react";
import StoreCard from "./StoreCard";
import { useReducer } from "react";
import { storeReducer, initialState } from "../../reducer/StoreCardReducer";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { get_products } from "../../store/Actions/Product";
import Loader from "../ui/Loader/Loader";
import { MoonLoader } from "react-spinners";
import GeneralUiOverlayLoader from "../ui/GeneralUiOverlayLoader";
// import
const StoreCards = () => {
  const store = useSelector((state) => state.products);
  const disptach = useDispatch();
  //(store);

  useEffect(() => {
    disptach(get_products("All", "All"));
  }, []);
  //(store.products);
  return store.isloading ? (
    <GeneralUiOverlayLoader />
  ) : store.products ? (
    <div className=" flex flex-col sm:grid md:grid-cols-2  lg:grid-cols-3 mx-auto section gap-x-[2rem] gap-y-[12.25rem] items-center mb-[60px]">
      {store.products.map((prod) => (
        <StoreCard {...prod} />
      ))}
    </div>
  ) : (
    <div className="h-[50vh] w-full text-center font-lato text-[2rem]">
      Empty Store
    </div>
  );
};

export default StoreCards;
