import axios from "axios"
//para ver las cookies
const instance=axios.create({
    baseURL:"http://localhost:3000",
    withCredentials: true,
})

export default instance;