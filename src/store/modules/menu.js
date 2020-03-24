import {
  getList,
  createMenu
} from '@/api/menu'

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
  createMenu({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      createMenu(data).then(response => {
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
