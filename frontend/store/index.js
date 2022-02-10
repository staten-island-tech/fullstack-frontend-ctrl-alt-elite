export const state = () => ({
  codeHTML: '',
  codeCSS: '',
  codeJS: '',
})
export const mutations = {
  PUSH_HTML(state, code) {
    state.codeHTML = code
  },
  PUSH_CSS(state, code) {
    state.codeCSS = code
  },
  PUSH_JS(state, code) {
    state.codeJS = code
  },
}
export const actions = {}
