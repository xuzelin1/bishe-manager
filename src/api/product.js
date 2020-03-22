import request from '@/utils/request'

export function getList(data) {
  return request({
    url: '/products/salerList',
    method: 'post',
    data
  })
}

export function getDetail(_id) {
  return request({
    url: '/products/detail',
    method: 'post',
    _id
  })
}

export function createProduct(data) {
  return request({
    url: '/products/create',
    method: 'post',
    data
  })
}

export function editProduct(data) {
  return request({
    url: '/products/edit',
    method: 'post',
    data
  })
}
