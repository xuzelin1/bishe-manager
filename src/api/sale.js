import request from '@/utils/request'

export function getSalerList(data) {
  return request({
    url: '/sales/salerList',
    method: 'post',
    data
  })
}
