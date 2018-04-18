import request from '@/utils/request'

const base = 'jobtank'

export default {
  companyUpload: function companyUpload(data) {
    return request({
      url: `${base}/company/upload`,
      method: 'post',
      data
    })
  },

  companyStatic: function companyStatic() {
    return request({
      url: `${base}/company/static`,
      method: 'get'
    })
  },
  companyList: function companyList(pageSize, pageNumber, orderByDate) {
    return request({
      url: `${base}/company/list`,
      method: 'get',
      params: { pageSize, pageNumber, orderByDate }
    })
  },
  recommendScore: function recommendScore(id) {
    return request({
      url: `${base}/jobtank/recommend/score/${id}`,
      method: 'get'
    })
  }
}
