export const state = () => ({
  codeHTML: '',
  codeCSS: '',
  codeJS: '',
  projectTitle: '',
  projectDescription: '',
  followInfo: {
    // should be only used within the profile module
    name: '',
    followers: 0,
    following: 0,
    projects: 0,
  },
  otherIDInfo: {   
     // should be only used within the profile module
    mongo_id: '',
    email: '',
  },
  darkMode: true,
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
    state.followInfo.name = value.name
    state.followInfo.following = value.following
    state.followInfo.followers = value.followers
    state.followInfo.projects = value.projects
  },

  updateOtherIDInfo(state, value) {
    state.otherIDInfo.email = value.email
    state.otherIDInfo.mongo_id = value.mongo_id
  },
  

  getMongoIDInfo(state, value) {
    state.otherIDInfo.mongo_id = value
  },
  getEmailInfo(state, value) {
    state.otherIDInfo.email = value
  },
  toggleMode(state) {
    state.darkMode = !state.darkMode
  },
}
export const actions = {}
