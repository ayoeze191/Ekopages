import React, {useState} from 'react'
import { Validate } from './validate/validate'



const useOnchange = () => {
    const [details, setDetails] = useState([
        {username: "", error: null},
        // {email: "", error: null},
        {password: "", error: null}
    ])
    
      const loginOnChangeHandler = (e) => {
          let new_detail = {...details}
          let error = null
    
          if(e.name === "username") {
            new_detail[0].username = e.target.value
           if( Validate(e.target.value, e.target.name)){
             error = Validate(e.target.value, e.target.name)
             new_detail[0].error = error
           }
          }
    
          if(e.name === "password") {
            new_detail[1].password = e.target.value
            if( Validate(e.target.value, e.target.name)){
              error = Validate(e.target.value, e.target.name)
              new_detail[1].error = error
            }
          }
    
          setDetails(new_detail)
      }






      return { loginOnChangeHandler, details }
}

export default useOnchange