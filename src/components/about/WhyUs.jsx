import React from 'react'
import earth from "./../../assets/about/earth.png"
const WhyUs = () => {
  return (
    <div className='font-lato'>
        <img src={earth} className='relative -mb-24 mt-12'/>
        <div className='py-12 mx-auto lg:px-0 px-6 section font-lato text-[1rem] md:text-[1.25rem] flex flex-col gap-10'>
        <div >
        <p >Our purpose is simple- to catch them young and inspire children to lead the next generation with
a deep understanding of sustainability issues, foundational literacy, and numeracy. We promote
stories and educational content that reflect African cultures and realities, ensuring that every
Nigerian child achieves basic literacy and numeracy by 2030 while acquiring the knowledge and
skills to drive sustainable development in line with SDG 4 eliminating disparities, ensuring that
no child is left behind in the pursuit of a better, greener planet.
        </p>
<p>Eko Pages is a publishing outfit that immerses children into the act of environmental sustainability with our top books, stories and publications. </p>

</div>
<h2 className='lato text-[1.25rem] md:text-[2rem] font-[600]'>Why EkoPages?</h2>

<div>
   
<p>At Ekopages, we believe that education is the foundation of progress and that empowering
children and educators with the right tools can transform communities. Our platform uniquely
combines foundational literacy and numeracy education with climate and sustainability-focused
content, ensuring that young learners are equipped not only with essential academic skills but
also with the awareness and capacity to address global challenges. In a world increasingly
shaped by environmental crises, Ekopages fills a critical gap by embedding sustainability into
education, fostering a generation of informed and proactive changemakers.</p>
<p>What sets Ekopages apart is our deep commitment to local relevance and accessibility. Our
books and e-learning materials are tailored to reflect African cultures, stories, and realities,
making education relatable and impactful for children across Nigeria. With a vision to ensure
every child achieves basic literacy and numeracy by 2030, we combine storytelling, innovative
technology, and hands-on community programs to deliver high-quality education at scale. By
choosing Ekopages, you are supporting a movement that empowers learners, strengthens
communities, and builds a sustainable future for all. </p>
      </div>
        </div>
    </div>
  )
}

export default WhyUs