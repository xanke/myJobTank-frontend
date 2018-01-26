import axios from 'axios'

axios.defaults.headers['Content-Type'] = 'application/json'
axios.defaults.timeout =  6000

export const getUpdateUrl = () => {
  return axios.get(`//13.58.19.185:8080/jobtank/file/upload`)
}

export const resumeUpload = params => {
  return axios.post(`//13.58.19.185:8080/jobtank/resume/upload`, params)
}
