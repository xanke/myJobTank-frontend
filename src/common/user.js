import request from '@/utils/request'

const base = 'jobtank'

export default {
  resumeUpload: function resumeUpload(data) {
    return request({
      url: `${base}/resume/upload`,
      method: 'post',
      data
    })
  },

  fileUpload: function fileUpload(data) {
    return request({
      url: `${base}/file/upload`,
      method: 'post',
      data
    })
  },
  fileDownload: function fileDownload(id) {
    return request({
      url: `${base}/file/download/${id}`,
      method: 'get'
    })
  },
  parser: function parser(dta) {
    return request({
      url: `${base}/parser`,
      method: 'get'
    })
  }
}
