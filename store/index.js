export const state = () => ({
  modalClear: false,
});

export const mutations = {
  modalClear (state, data) {
    state.modalClear = data;
  }
};

export const actions = {
  modalClear: (state , data) => {
    state.commit("modalClear", data);
  }
};

export const getters = {
  modalClear: (state) => {
    return state.modalClear
  }
};