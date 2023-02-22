import React from 'react'
import Question from '../FAQ/Question'
import back from "./../../assets/back.png"
import { questions } from './questionsLiteral'
import { Link } from 'react-router-dom'
import Quiz from './Quiz'

const ShortStory = () => {
  return (
    <div className='font-lato bg-[white]'>
        <section className=" h-[10.625rem] flex justify-center items-center font-lato bold bg-[white]" >
    <div className="w-full mx-auto lg:px-0 px-6 max-w-[77rem] py-4 mx-auto h-fit px-7  text-[#444444] flex items-center justify-center"> 
    <div className='font-[700] text-[3rem] flex h-full items-center '>  Short Story </div> </div>
</section>

<div className='flex flex-start w-full  mx-auto lg:px-0 px-6 max-w-[77rem] mb-[3rem]'>
    <div className = " max-w-2xl ">
The classroom was extremely hot. Ms Pepple had asked Adiel to open all the windows earlier, still the children were sweating profusely. Ms Pepple knew the kids could not learn in this circumstance. It was hot in April and even though she knew it was due to climate change, she was aware of the fact that the kids would not understand. It was the duty of teachers to educate children on issues of climate change and the SDGs generally but the teachers at the community college knew nothing about them. <br />

‘Aunty, why is it this hot?’ Adiel asked.
‘Because the world is ending’ Bolu replied.
The students laughed at the reply and Ms Pepple signaled for decorum and for the children to close their lesson notes.
‘The weather is hot because of climate change.’
‘What is climate change ma?’ Adiel probed. <br />
‘ Climate change refers to long-term shifts in te mperatures and weather patterns. Climate change is the reason why you are hot in a supposed rainy season. These shifts may be natural, or through human activities primarily due to burning fossil fuels like coal, oil and gas. Climate change can affect our health, ability to grow food, housing, safety and work. Switching energy systems from fossil fuels to renewables like solar or wind will reduce the emissions driving climate change. <br />
 
It is important that teachers teach children about climate change and educate them because it helps to prepare them for the future. In fact, it is important to inculcate Climate action into the curriculum of schools across the country. This way, both teachers and students will learn how to protect the environment. <br />

The bell rang and Ms Pepple allowed the kids to go out for their long break. <br />

      

                                                                              </div>
                                                                              <div></div>
</div>

<div className='mx-auto text-center section mb-[3rem] font-[500] text-[1.25rem]'>  QUESTIONS </div>
    <div className='section flex flex-col gap-[4.125rem]'>
        {questions.map((quest) => <Quiz {...quest}/>)}
    </div>
    </div>
  )
}

export default ShortStory