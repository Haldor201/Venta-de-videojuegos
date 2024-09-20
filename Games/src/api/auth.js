//usamos axios
import axios from "./axios.js"

//                           recibe un usuario y lo envia al post
export const registerRequest=async(user) => axios.post(`/api/register`,user)
export const loginRequest=async(user)=>axios.post(`/api/login`,user)
export const verifyTokenRequest=async()=>axios.post("/api/verify")
export const logoutRequest=async()=>axios.post("/api/logout")