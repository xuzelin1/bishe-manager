import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/users/signin',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/users/getUser',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: '/users/signup',
    method: 'post'
  })
}

export function getStoreInfo() {
  return request({
    url: '/stores/getMyStoreInfo',
    method: 'get'
  })
}
