import React from 'react'
import earth from "./../../assets/about/earth.png"
const WhyUs = () => {
  return (
    <div className='font-lato'>
        <img src={earth} className='relative -mb-24 mt-12'/>
        <div className='py-12 mx-auto lg:px-0 px-6 section font-lato text-[1rem] md:text-[1.25rem] flex flex-col gap-10'>
        <div >
        <p >Our purpose is simple- catch them young. We aim to catch children young to inspire them to lead the next generation fully aware of sustainability issues and how to address them via a proper representation of the realities the children are in without jeopardizing diversity. We need African children to read and see more books for them, with characters that look like them and a culture that represents them.
        </p>
<p>Eko Pages is a publishing outfit that immerses children into the act of environmental sustainability with our top books, stories and publications. The goal of the brand is to train the kids into becoming eco-soldiers, thereby leading to a protected and sustainable environment for everyone. Books published by “Eko Pages” will create an indelible impact on children of our generation.</p>

</div>
<h2 className='lato text-[1.25rem] md:text-[2rem] font-[600]'>Why EkoPages?</h2>

<div>
   
<p>We have observed that children are deeply concerned about environmental issues and worry because their voices are not being heard, nor that their opinions are considered.</p>
<p>Through literature, children can better understand global issues, engage in critical inquiry about themselves globally, and combine narrative structure with information to take children beyond and expand their knowledge of complex scientific concepts such as climate change. </p>
<p>Education is key to the integrated global framework of 17 Sustainable Development Goals (SDGs), reaffirmed as a central concern by the United Nations and UNESCO. There is a direct relationship between childhood education and achieving Sustainable Development Goals. </p>
<p>As we approach SDG 2030, proper childhood education provides a sound footing and foundation that equips a child to become professional and competent to handle the development issues outlined in the global goals. Education for sustainability shapes learning and attitudes and provides the proper foundation for these children to tackle different aspects of sustainability in a localized manner as they transition into adults.</p>
        </div>
        </div>
    </div>
  )
}

export default WhyUs