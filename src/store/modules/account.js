import {
  getList,
  createAccount,
  forbidAccount
} from '@/api/account'

const state = {
  list: [],
  detail: {}
}

const mutations = {
  SET_MENULIST: (state, list) => {
    state.productlist = list
  }
}

const actions = {
  // get product list
  getList({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      getList(data).then(response => {
        const data = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  createAccount({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      createAccount(data).then(response => {
        const data = response
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  forbidAccount({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      forbidAccount(data).then(response => {
        const data = response
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
