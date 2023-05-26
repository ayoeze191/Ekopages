import * as assets from "../assets/inputField"

const InputField = (props) => {

   

    if (props.type === "password" || props.type === "confirm password") {
                return (
                        <div className="w-full h-[77px] rounded-[8px] flex items-center relative"> 
                        <div className="w-[100%] h-full flex flex-col gap-[0.5rem]">
                                    <p className="text-[1rem]  font-lato font-[500] md:font-[600]">{props.fieldName}</p>
                                    <input  name = {props.name} id={props.id} value={props.value} onChange={(e) => props.onChangeHandler(e)} type={props.showValue ? "text":"password"} placeholder="Enter Password" className="w-full   outline-none h-[100%] text-[1rem] w-full h-[100%] text-[1rem] font-Poppins p-[0.8rem] font-Poppins border-solid border-[#232323] border-[1px] rounded-[5px]" />
                        </div>
                                {props.fieldName === "Password" || props.fieldName === "confirm password" ?  <button type="button" onClick={props.handleVisibility} className="relative right-[10px]">
                                {/* <img src={assets.visibility} alt="visibility icons" /> */}
                        </button>:null}
                        

                </div>
                    )
        
    }
    if(props.type === "email") {
        return <div className="w-full rounded-[8px] flex flex-col items-start gap-[0.5rem]">
        {/* <img className="mr-[15px]" src={props.src} alt={props.desc} /> */}
        {/* <div className="w-[100%] h-full pt-[5px] relative"> */}
            <p className=" font-Poppins font-[600] text-[1rem] font-lato text-[#232323] font-[500] md:font-[600]">{props.fieldName}</p>
            <input id={props.id}  name = {props.name} value={props.value} placeholder={"Enter your email"} onChange={(e) => props.onChangeHandler(e)} className="w-full h-[100%] text-[16px] w-full h-[100%] text-[16px] text-[1rem] font-Poppins p-[0.8rem] font-Poppins border-solid border-[#232323] border-[1px] rounded-[5px] outline-none" type={"text"} />
        {/* </div> */}
    </div>
    }
    
    return <div className="w-full rounded-[8px] flex flex-col items-start gap-[0.5rem]">
        {/* <img className="mr-[15px]" src={props.src} alt={props.desc} /> */}
        {/* <div className="w-[100%] h-full pt-[5px] relative"> */}
            <p className=" font-Poppins font-[600] text-[1rem] font-lato text-[#232323] font-[500] md:font-[600]">{props.fieldName}</p>
            <input id={props.id}  name = {props.name} value={props.value} placeholder={props.fieldName === "username"? "enter your username":null} onChange={(e) => props.onChangeHandler(e)} className="w-full h-[100%] text-[16px] w-full h-[100%] text-[16px] text-[1rem] font-Poppins p-[0.8rem] font-Poppins border-solid border-[#232323] border-[1px] rounded-[5px] outline-none" type={"text"} />
        {/* </div> */}
      
        
       
    </div>
}

export default InputField