import React from 'react'
import { useState, useReducer } from 'react'
import { storeReducer, initialState } from '../../../../reducer/StoreCardReducer'
import ProductPending from './ProductPending'
import bell from "./../../../../assets/dashboard/bell.png"
import PendingProducts from './PendingProducts'
import ApprovedOrder from './Approved/ApprovedOrder'
import Approved from './Approved/Approved'
import { Tabs, TabList, TabPanels, Tab, TabPanel, chakra } from "@chakra-ui/react"
import  { motion, AnimatePresence, isValidMotionProp } from "framer-motion"


// const ChakraBox = chakra(motion.div, {
//   shouldForwardProp: isValidMotionProp,
// })

const Orders = () => {
    const [status, setStatus] = useState("Completed")
    const [state, dispatch] = useReducer(storeReducer, initialState) 


    const style = ["border-[#888888] border-[1px] border-solid rounded-[5px] text-[#888888] text-[1rem] py-[0.5rem] px-[2.125rem]", "py-[0.5rem] px-[2.125rem] rounded-[5px] text-[#888888] text-[1rem] bg-[#C54D09] text-[white]"]

  return (
    <div className=' md:pl-[1.68rem] md:pr-[5.0625rem] my-[6rem]'>
        <Tabs isLazy={true} variant={'unstyled'}>
      <div className='flex justify-between'>
        <div className='mb-[24px] md:mb-[4.68rem] flex  md:justify-between flex-col md:flex-row flex-1 items-center md:items-start'>
            <p className='font-[700] md:font-[500] md:text-[20px] text-[1.5rem] text-[#232323] mb-[22.5px] md:mb-[0px] font-lato'>My Orders</p>
            <div className='flex gap-[1rem] text-[11.25px] font-[400] md:font-[500] md:text-[1rem] '>
              
              <TabList style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "1rem"
                
              }}>
             <Tab _selected={{ bg: "#C54D09", color:"white", border: "0px none" }} style={{
               padding: "0.5rem 2.125rem",
               borderRadius: "5px",
               border: "solid 1px #88888888"
             }}> <button >Pending</button> </Tab>
             <Tab _selected={{ bg: "#C54D09", color:"white", border: "0px none" }} style={{
               padding: "0.5rem 2.125rem",
               borderRadius: "5px",
               border: "solid 1px #88888888"
             }}> <button>Completed</button> </Tab>
              </TabList>
            </div> <div></div>
        </div>
        <div>
              <img src={bell} alt="" />
        </div>
      </div>

    < TabPanels  >
      <TabPanel as={AnimatePresence}>
    <PendingProducts />
    </TabPanel>
    <TabPanel as={AnimatePresence}>
    <Approved />  
    </TabPanel>
    </TabPanels>
      </Tabs>
    </div>
  )
}

export default Orders


// site under maintainance