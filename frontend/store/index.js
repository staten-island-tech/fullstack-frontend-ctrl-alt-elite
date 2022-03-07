export const state = () => ({
  codeHTML: '',
  codeCSS: '',
  codeJS: '',
  projectTitle: '',
  projectDescription: '',
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
  PUSH_TITLE(state, title) {
    state.projectTitle = title
  },
  PUSH_DESCR(state, description) {
    state.projectDescription = description
  },
}
export const actions = {}
