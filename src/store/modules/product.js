import {
  getList,
  createProduct,
  editProduct
} from '@/api/product'

const state = {
  list: [],
  detail: {}
}

const mutations = {
  SET_PRODUCTLIST: (state, list) => {
    state.productlist = list
  },
  SET_DETAIL: (state, detail) => {
    state.detail = detail
  }
}

const actions = {
  // get product list
  getProductList({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      getList(data).then(response => {
        const { data } = response

        commit('SET_PRODUCTLIST', data)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  createProduct({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      createProduct(data).then(response => {
        const { data } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  editProduct({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      editProduct(data).then(response => {
        const { data } = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
