export const state = () => ({
  codeHTML: '',
  codeCSS: '',
  codeJS: '',
  projectTitle: '',
  projectDescription: '',
  project_id: '',
  reload:1,
   
  otherIDInfo: {
    
    mongo_id: '',
    email: '',
  },
  darkMode: true,
  newProject: true,
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
  updateProject(state) {
    state.newProject = !state.newProject
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
}
