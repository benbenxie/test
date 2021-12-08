import { ckry, } from '@/api/view'
const state = {
  ajaxCount: 0,

}
const mutations = {
  
  setMode(state, data) {
    state.mode = data
  }
}
const actions = {
  ckry({ commit }, data) {
    return ckry(data)
  },
 
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
