export const state = () => ({
  counter: 0,
})
export const mutations = {
  INCREMENT_COUNT(state, incrementBy) {
    state.counter += incrementBy
  },
  RESET(state) {
    state.counter = 0
  },
}
const test = 0
export const actions = {
  updateCount({ state, commit }, incrementBy) {
    if (test === 0) {
      commit('INCREMENT_COUNT', incrementBy)
    }
  },
}
