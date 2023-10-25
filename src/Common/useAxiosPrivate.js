import { useEffect } from "react"
import defaultRestApi, { responseInteceptor } from "./RestAPiInstance";
import axios from "axios";
import APIs from "./API";


export const useAxiosPrivate = () => {
    const token = refreshToken();
    useEffect(() => {
        
        const requrestIntercept = responseInteceptor.interceptors.response.use(response => {
            return response;
          }, async error => {
            const originalRequest = error.config;
            if (error.response.status === 403 && !originalRequest._retry) {
              originalRequest._retry = true;
              
              // Fetch a new token using the refresh token API.
              
              // Set the new token for the original request and re-try it.
              originalRequest.headers['Authorization'] = 'Bearer ' + token;
              return await defaultRestApi(originalRequest);
            }
          
            return Promise.reject(error);
          });
        
          return () => {
            responseInteceptor.interceptors.request.eject(requrestIntercept);
            responseInteceptor.interceptors.response.eject(requrestIntercept);
          }
    },[token])

    return responseInteceptor;
}
async function refreshToken() {
        
    const response = await axios.post(APIs.getRefreshToken(), {
     
    //   refreshToken: localStorage.getItem('refreshToken'),
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    
      
    });
    const newToken = response.data.accessToken;
    console.log("New token accessed " + newToken)
    localStorage.setItem("token", newToken);
    return newToken;
  }