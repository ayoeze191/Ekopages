import axios from "axios"
import { refreshToken } from "./context/auth/comp/Login";



const instance = axios.create({baseURL: 'https://ekopages-production.up.railway.app/'});

export default instance

instance.interceptors.request.use(function (config) {
    const refresh = localStorage.getItem('eko_refresh')
    const exp = new Date(localStorage.getItem('exp'))
    console.log(exp)
    const presentDate = new Date()
    if(presentDate > exp && refresh) {
      const token = refresh_token(refresh)
      if(token){
        config.headers["Authorization"] = `Bearer ${token}`;
      }
    }
    return config;
  }, function (error) {
    
    return Promise.reject(error);
  });


  const refresh_token = (refresh) => {
    axios.post('https://ekopages-production.up.railway.app/auth/token/refresh/', {refresh})
        .then((res) => {
            console.log(res)
            localStorage.setItem('exp', res.data.access_token_expiration)
            localStorage.setItem('eko_access', res.data.access)
            return res.data.access
          })
          .catch((err) => {
            if(err.response.detail === "token_not_valid"){
              localStorage.clear()
              localStorage.removeItem('exp')
              localStorage.removeItem('eko_access')
              localStorage.removeItem('eko_refresh')
              localStorage.removeItem('eko_user')
              localStorage.removeItem('exp')
}
            console.log(err, "error refreshing token")
            return;
          })
  }
