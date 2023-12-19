import axios from "axios"
// import { refreshToken } from "./context/auth/comp/Login";



const instance = axios.create({baseURL: 'https://ekopages-production.up.railway.app/'});

export default instance

instance.interceptors.request.use(function (config) {
    const refresh = localStorage.getItem('eko_refresh')
    const exp = new Date(localStorage.getItem('exp'))
    //(exp)
    console.log("interceptors")
    const presentDate = new Date()
    if(presentDate > exp && refresh) {
      console.log("expired but renewd")
      return refresh_token(refresh, config)
      .then((config) => {
        return config
      })
    }
    return config;
  }, function (error) {
    return Promise.reject(error);
  });


  const refresh_token =  (refresh, config) => {

    return axios.post('https://ekopages-production.up.railway.app/auth/token/refresh/', {refresh})
      .then((res) => {
        localStorage.setItem('exp', res.data.access_token_expiration)
        localStorage.setItem('eko_access', res.data.access)
        console.log("successfully updated token")
        config.headers["Authorization"] = `Bearer ${res.data.access}`;
        return config
      })    
    .catch((err) =>  {
            if(err.response.detail === "token_not_valid"){
              localStorage.clear()
              localStorage.removeItem('exp')
              localStorage.removeItem('eko_access')
              localStorage.removeItem('eko_refresh')
              localStorage.removeItem('eko_user')
              localStorage.removeItem('exp')
            }
            //(err, "error refreshing token")
            return null;
          }
    )
}
