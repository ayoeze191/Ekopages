import axios from "axios"

export const Config = () => {
  const access = localStorage.getItem('access')? localStorage.getItem('access'):null
  console.log(access)
  const tokenConfig = () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        'Authorization': ''
      },
    };
    if(access){
    config.headers["Authorization"] = `Bearer ${access}`;
    }
    return config;
  }
}
