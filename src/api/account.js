import request from '@/utils/request'

export function getList(data) {
  return request({
    url: '/accounts/list',
    method: 'post'
  })
}

export function createAccount(data) {
  return request({
    url: '/accounts/create',
    method: 'post',
    data
  })
}

export function forbidAccount(data) {
  return request({
    url: '/accounts/forbid',
    method: 'post',
    data
  })
}
