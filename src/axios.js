import axios from "axios"
import { refreshToken } from "./context/auth/comp/Login";



const instance = axios.create({baseURL: 'https://ekopages-production.up.railway.app/'});

export default instance

instance.interceptors.request.use(function (config) {
    const exp = new Date(localStorage.getItem('exp'))
    const presentDate = new Date()
    console.log({"exp":exp}, {"presentDate": presentDate})
    if(presentDate > exp) {
        refreshToken()
        .then((res) => {
            localStorage.setItem('exp', res.data.access_token_expiration)
            localStorage.setItem('eko_access', res.data.access)
            config.headers["Authorization"] = `Bearer ${res.data.access}`;
          })
          .catch((err) => {
            console.log(err, "error refreshing token")
          })
    }
    return config;
  }, function (error) {
    
    return Promise.reject(error);
  });