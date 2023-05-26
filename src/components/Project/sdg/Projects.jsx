import React from 'react'
import SDG_Literacy_drive from "./../../../assets/projects/SDG_Literacy_drive.png"
const Projects = () => {
  return (
    <div className='flex flex-col md:flex-row gap-[5rem] section font-lato mb-[5.4225rem] mt-[5rem]'>
        <div className='w-full md:w-[45%]  flex flex-col justify-start gap-[10.76px] py-0'>
        <p className='text-[#505050] text-[1.5rem] w-full font-[400]  order-2 md:order-1 text-center md:text-left'>OUR PROJECTS</p>
        <div className='order-1 md:order-2 w-full flex-1'><img src={SDG_Literacy_drive} alt="" className='w-full'/></div>
        </div>


        <div className='text-[1rem] md:text-[1.25rem] font-[400] text-[#4A4A4A] w-full md:w-[55%] flex flex-col gap-10'>
        <p>
        Determined to enhance the standard of education in Nigeria through exposure to books that would educate the African child on environmental sustainability, EkoPages has called for the adaptation of Sustainable Development Goals (SDG) books into the school curriculum. The Chief Communications Officer of the outfit, Olayiwola Mariam, who disclosed this, said it is not just enough for children to read the books.
        </p>
    <p>
She added that the government and stakeholders must also make sure that SDG literature texts are inculcated into both primary and secondary curriculum. She said there is the need to educate the younger generation on renewable energy and sustainable development goals in general through literature, adding that the adaptation of SDG books into the school curriculum would go a long way in shaping the future of the younger ones.
</p>
        </div>
    </div>
  )
}

export default Projects