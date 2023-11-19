import axios from "axios"

const http = axios.create({
  baseURL: 'https://solelybackend1.onrender.com/api',
  timeout: 2000
})

http.interceptors.request.use(config => {
  return config
})

http.interceptors.response.use(response => {
  return response.data
}, error => {
  console.error('error:', error)
})

export default http