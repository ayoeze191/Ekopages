import React from 'react'
import { useReducer } from 'react'
import { storeReducer, initialState } from '../../../../reducer/StoreCardReducer'
// import 
import ProductPending from './ProductPending'
import { motion } from 'framer-motion'
const PendingProducts = () => {
    const [state, dispatch] = useReducer(storeReducer, initialState) 


  return (
    <motion.div style={{overflowX: "hidden"}}
    initial = {{marginRight:"-100%", opacity:0}}
            animate = {{marginRight: ["-100%", "0"], opacity: [0, 1]}}
            // exit={{opacity: 0, marginRight:"-100%"}}
            transition={{ duration: 0.5,}}
    >
    <div className='mb-[2.5625rem]'>
    {state.product.filter((pro) => pro.Name === "The Travails of Nkem").map(prod => <ProductPending {...prod} />)}
    </div>
    <div className='w-full flex justify-end'>
    <button className='bg-[#5A0C91] py-[0.9375rem] w-full md:max-w-[29rem] text-white rounded-[5px] font-lato font-[600] text-[1.25rem] '>
        Place Order
    </button>
    </div>
    </motion.div>
  )
}

export default PendingProducts