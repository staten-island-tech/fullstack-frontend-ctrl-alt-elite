export const state = () => ({

    
    followInfo: {
      followers:10,
      following:0,
      projects:0
    },
    darkMode: true,

    
})

export const mutations = {

  updateFollowInfo(state, value) {
    state.followInfo.following = value.following
    state.followInfo.followers = value.followers
    state.followInfo.projects = value.projects
  },

}

export const actions = {
    }  
  


