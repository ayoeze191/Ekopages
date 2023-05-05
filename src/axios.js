import axios from "axios"



const instance = axios.create({baseURL: 'https://ekopages-production.up.railway.app/'});

export default instance