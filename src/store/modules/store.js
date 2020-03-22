import { getStoreInfo } from '@/api/user'

const state = {
  _id: '',
  storeName: '',
  position: '',
  introduction: ''
}

const mutations = {
  SET_STORE: (state, storeName) => {
    state.storeName = storeName
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_POSITION: (state, position) => {
    state.position = position
  },
  SET_ID: (state, _id) => {
    state._id = _id
  }
}

const actions = {
  // get store info
  getStoreInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getStoreInfo(state.token).then(response => {
        const { data } = response

        if (!data) {
          reject('Verification failed, please Login again.')
        }
        const { _id, name, introduction, position } = data

        commit('SET_STORE', name)
        commit('SET_INTRODUCTION', introduction)
        commit('SET_POSITION', position)
        commit('SET_ID', _id)
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
