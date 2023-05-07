import axios from "axios"

  export const tokenConfig = () => {
  // console.log(localStorage.getItem('access'), "access token")
  const access = localStorage.getItem('access')? localStorage.getItem('access'):null
    const config = {
      headers: {
        "Content-Type": "application/json",
        'Authorization': ''
      },
    };
    if(access !== null){
    config.headers["Authorization"] = `Bearer ${access}`;
    }
    // console.log(config)
    return config;
  }

  export const imageConfig = () => {
    const access = localStorage.getItem('access')? localStorage.getItem('access'):null
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          'Authorization': ''
        },
      };
      if(access !== null){
      config.headers["Authorization"] = `Bearer ${access}`;
      }
      return config;
    }


  // export const VisitorTokenConfig = (session_id) => {

  //   var myHeaders = new Headers();
  //   myHeaders.append("session_id", session_id);
  //   var requestOptions = {
  //       "Content-Type": "application/json",
  //       headers: myHeaders,
  //       redirect: 'follow'
  //       };
  //       return requestOptions
  // }


     // config.headers['Authorization'] = `Token ${session_id}`


     
  export const VisitorTokenConfig = () => {
    // console.log(localStorage.getItem('access'), "access token")
      const config = {
        headers: {
          "Content-Type": "application/json",
          // session_id
        },
      };
      return config;
    }