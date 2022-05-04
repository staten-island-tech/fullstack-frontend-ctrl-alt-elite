export const state = () => ({
  codeHTML: '',
  codeCSS: '',
  codeJS: '',
  projectTitle: '',
  projectDescription: '',
  project_id: '',
  reload: 1,

  otherIDInfo: {
    mongo_id: '',
    email: '',
  },
  darkMode: true,
  newProject: true,
  otherUserProject: false,
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
  PUSH_PROJECT_ID(state, id) {
    state.project_id = id
  },
  updateReload(state) {
    state.reload = !state.reload
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
  newProject(state, boolean) {
    state.newProject = boolean
  },
  isNotYourProject(state, boolean) {
    state.otherUserProject = boolean
  },
}
export const actions = {
  viewProject({ commit }, payload) {
    const specify = []
    payload.projects.forEach((project) => {
      if (project.project_title === payload.projectName) {
        specify.push(project)
      }
    })
    commit('PUSH_HTML', specify[0].published_code.html)
    commit('PUSH_CSS', specify[0].published_code.css)
    commit('PUSH_JS', specify[0].published_code.js)
    commit('PUSH_PROJECT_ID', specify[0]._id)
    commit('PUSH_TITLE', specify[0].project_title)
    commit('PUSH_DESCR', specify[0].description)
  },
  viewOtherProject({ commit }, payload) {
    commit('PUSH_HTML', payload.projects.published_code.html)
    commit('PUSH_CSS', payload.projects.published_code.css)
    commit('PUSH_JS', payload.projects.published_code.js)
    commit('PUSH_PROJECT_ID', payload.projects._id)
    commit('PUSH_TITLE', payload.projectName)
    commit('PUSH_DESCR', payload.projects.description)
  },
}
