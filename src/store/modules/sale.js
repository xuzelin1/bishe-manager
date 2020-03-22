import {
  getSalerList
} from '@/api/sale'

const state = {
  list: [],
  detail: {}
}

const mutations = {
  SET_PRODUCTLIST: (state, list) => {
    state.productlist = list
  }
}

const actions = {
  // get product list
  getSalerList({ commit, state }, data) {
    return new Promise((resolve, reject) => {
      getSalerList(data).then(response => {
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
