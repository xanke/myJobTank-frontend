import axios from 'axios'

axios.defaults.headers['Content-Type'] = 'application/json'
axios.defaults.timeout =  6000

export const getUpdateUrl = () => {
  return axios.get(`/jobtank/file/upload`)
}

export const resumeUpload = params => {
  return axios.post(`/jobtank/resume/upload`, params)
}

