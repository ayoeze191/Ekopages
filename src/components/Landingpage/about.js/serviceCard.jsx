


export const ServiceCard = ({styles,Icons,textStyle,title,content}) => {
    

    return (
        <div className=" relative md:w-[284px] text-left md:h-[361px] bg-[#E6DBEF] rounded px-[1rem] md:px-[20px] py-[10px] md:pt-[23px] md:pb-[26px] border-box" style={{ ...styles }}>
            <section className="md:w-[78px]  md:h-[78px] w-[41.63px] h-[41.63px] rounded bg-white flex items-center justify-center">
                {Icons}
            </section>
            <p className="mt-[15px] text-left font-[700] text-[13px] md:text-[24px] font-lato "
                style={{ ...textStyle }}>{title}
            </p>
            <p className="text-[#4A4A4A] text-[12px] md:text-[16px] h-[83px]">
             {content}
            </p>
            

            <button className="mt-[16px] text-[10px] md:text-[1rem] md:mt-[40px] md:w-[120px] md:h-[40px] w-[75px] h-[28px] bg-[#5A0C91] text-[white] rounded">
                    Learn more
            </button>
            
        </div>
    )
}