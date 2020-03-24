import request from '@/utils/request'

export function getList(data) {
  return request({
    url: '/menus/list',
    method: 'get'
  })
}

export function createMenu(data) {
  return request({
    url: '/menus/create',
    method: 'post',
    data
  })
}
