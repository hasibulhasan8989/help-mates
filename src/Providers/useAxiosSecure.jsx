

import axios from 'axios';

const useAxiosSecure = () => {

    

    const axiosSecure=axios.create({
        withCredentials:true,
        baseURL:'http://localhost:3000'
    })

//     axiosSecure.interceptors.response.use(function (config) {
    
//     return config;
//   }, function (error) {
//     if(error.status===401||error.status===401){
//         logOut()

//         console.log("Logout")
//     }
//     return Promise.reject(error);
//   });
    return (
        axiosSecure
    );
};

export default useAxiosSecure;