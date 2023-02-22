


export const ServiceCard = ({styles,Icons,textStyle,title,content}) => {
    

    return (
        <div className=" relative w-[284px] m-[8px]  mb-[40px] text-left h-[361px] bg-[#E6DBEF] rounded p-[20px] border-box" style={{ ...styles }}>
            <section className="w-[78px]  h-[78px] rounded bg-white flex items-center justify-center">
                {Icons}
            </section>
            <p className="mt-[15px] text-left font-[700] text-[24px] font-lato "
                style={{ ...textStyle }}>{title}
            </p>
            <p className="text-[#4A4A4A] text-[16px] h-[83px]">
             {content}
            </p>
            

            <button className="mt-[50px] w-[120px] h-[40px] bg-[#5A0C91] text-[white] rounded">
                    Learn more
            </button>
            
        </div>
    )
}