export const state = () => ({
  counter: 0,
})
export const mutations = {
  INCREMENT(state, value) {
    state.counter += value
  },
  RESET(state) {
    state.counter = 0
  },
}
