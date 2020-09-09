const state = {
  modalClear: false,
}

const mutations = {
  modalClear (state, data) {
    state.modalClear = data;
  }
}

//ยังไม่เห็นความจำเป็นต้องใช้ ทำเผื่อไว้ก่อนเฉยๆนะครับ
const actions = {
  // modalClear: ({ commit, state }, data) => {
  //   commit(data)
  // }
}

//ยังไม่เห็นความจำเป็นต้องใช้ ทำเผื่อไว้ก่อนเฉยๆนะครับ
const getters = {
  // modalClear: (state) => {
  //   return state.modalClear
  // }
}

export default {
  namespaced: true,
  state,
  mutations,
  // actions,
  // getters,
}