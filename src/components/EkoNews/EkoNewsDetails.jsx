import React from 'react'
import Otherinteresting from './otherInteresting/Otherinteresting'
const EkoNewsDetails = () => {
  return (
    <div className='font-lato'>
    <p className='font-[700] py-4 mx-auto h-fit px-7 rounded-md text-[1.5rem] md:text-[3rem] font-[700] h-[10.625rem] text-center '>SDG Literacy Drive</p>
    <div className='flex flex-col gap-[6.25rem] items-center max-w-5xl mx-auto'>
    <div className='w-full'>
        <img src={''}  className="w-full" alt="" />
    </div>
    <div>
        <p>
    Determined to enhance the standard of education in Nigeria through exposure to books that would educate the African child on environmental sustainability, EkoPages has called for the adaptation of Sustainable Development Goals (SDG) books into the school curriculum. The Chief Communications Officer of the outfit, Olayiwola Mariam, who disclosed this, said it is not just enough for children to read the books.
    </p>
    <p>
She added that the government and stakeholders must also make sure that SDG literature texts are inculcated into both primary and secondary curriculum. She said there is the need to educate the younger generation on renewable energy and sustainable development goals in general through literature, adding that the adaptation of SDG books into the school curriculum would go a long way in shaping the future of the younger ones.
</p>
</div>
    </div>
    <div className='w-full mt-[5rem] mx-auto lg:px-0 px-6 max-w-[62rem] flex flex-col gap-[6rem]'>
    <Otherinteresting />
    </div>
</div>
  )
}

export default EkoNewsDetails