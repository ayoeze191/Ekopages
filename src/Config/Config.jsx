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
