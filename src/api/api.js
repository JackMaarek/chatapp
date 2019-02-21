import axios from 'axios';
const api = "http://localhost:8080";

export function register(userData){
    console.log(userData)
    axios.post(`${api}/api/auth/register`, userData)
    .then(function (response) {
        console.log(response);
      })
    .catch(function (error) {
        console.log(error);
    })
}

export function login(userData){
    console.log(userData)
    axios.post(`${api}/api/auth/login`, userData)
    .then(function (response) {
        console.log(response);
      })
    .catch(function (error) {
        console.log(error);
    })

}


export function logout(){
    console.log('ouioui tu clik sur le bouton')
    axios.post(`${api}/api/auth/logout`)
    .then(function (response) {
        console.log(response);
      })
    .catch(function (error) {
        console.log(error);
    })

}
