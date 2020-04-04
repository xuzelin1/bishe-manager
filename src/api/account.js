import request from '@/utils/request'

export function getList(data) {
  return request({
    url: '/accounts/list',
    method: 'get'
  })
}

export function createAccount(data) {
  return request({
    url: '/accounts/create',
    method: 'post',
    data
  })
}

export function editAccount(data) {
  return request({
    url: '/accounts/edit',
    method: 'post',
    data
  })
}
