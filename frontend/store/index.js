export const state = () => ({
  codeHTML: '',
  codeCSS: '',
  codeJS: '',
  projectTitle: '',
  projectDescription: '',
  followInfo: {
    followers: 10,
    following: 0,
    projects: 0,
  },

  otherIDInfo: {
    email: 'abc',
  },
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
  updateFollowInfo(state, value) {
    state.followInfo.following = value.following
    state.followInfo.followers = value.followers
    state.followInfo.projects = value.projects
  },
  updateOtherIDInfo(state, value) {
    state.otherIDInfo.email = value
  },
}
export const actions = {}
