import axios from 'axios';
const api = "http://localhost:8080";

export function register(userData){
    console.log(userData)
    axios.post(`${api}/api/auth/register`, { crossdomain: true }, userData)
}
