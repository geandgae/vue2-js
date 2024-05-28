const alert = {
  namespaced: true,
  state: {
    show: false,
    dialog: 'This is alert content',
  },
  mutations: {
    setShow(state, show) {
      state.show = show
    },
    setDialog(state, dialog) {
      state.dialog = dialog
    },
  },
  actions: {
    updateShow({ commit }, show) {
      commit('setShow', show)
    },
    updateAlert({ commit }, dialog) {
      commit('setDialog', dialog)
    },
  },
  getters: {
    show: state => state.show,
    dialog: state => state.dialog,
  },
}


export default alert