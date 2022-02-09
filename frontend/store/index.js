export const state = () => ({
  counter: 3,
})
export const mutations = {
  INCREMENT_COUNT(state, incrementBy) {
    state.counter += incrementBy
  },
}
export const actions = {
  updateCount({ state, commit }, incrementBy) {
    if (state.user) {
      commit('INCREMENT_COUNT', incrementBy)
    }
  },
}
