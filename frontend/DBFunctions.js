module.exports.getFollowing = async (userID, info) => {
  const accessToken = sessionStorage.getItem('app_token')
  const userInfo = { email: userID }
  const response = await fetch(
    `https://codeverse-backend.onrender.com/getFollowing`,
    {
      method: 'POST',
      // Adding body or contents to send
      body: JSON.stringify(userInfo), // Adding headers to the request headers:
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `${accessToken}`,
      },
    }
  )
  const data = await response.json()
  info.data = data.list
}

module.exports.getFollowInfo = async (userID, followUserID, followInfo) => {
  const accessToken = sessionStorage.getItem('app_token')
  const userInfo = { userID, followUserID }
  const response = await fetch(
    `https://codeverse-backend.onrender.com/getFollowInfo`,
    {
      method: 'POST',
      // Adding body or contents to send
      body: JSON.stringify(userInfo), // Adding headers to the request headers:
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `${accessToken}`,
      },
    }
  )
  const data = await response.json()
  followInfo.following = data.following
  followInfo.followedby = data.followedby
}

module.exports.getInfo = async (userID, info) => {
  const accessToken = sessionStorage.getItem('app_token')
  const userInfo = { userID }
  const response = await fetch(
    `https://codeverse-backend.onrender.com/getInfo`,
    {
      method: 'POST',
      body: JSON.stringify(userInfo), // Adding headers to the request headers:
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `${accessToken}`,
      },
    }
  )
  const data = await response.json()
  info.following = data.following
  info.followers = data.followers
  info.projects = data.projects
  info.name = data.name
  info.profilePic = data.profilePic
  info.mongoID = data.mongoID
  info.userID = data.userID
}

module.exports.unFollow = async (userID, unfollowUserID, data) => {
  const accessToken = sessionStorage.getItem('app_token')
  const userData = { userID, unfollowUserID }
  const response = await fetch(
    `https://codeverse-backend.onrender.com/unFollow`,
    {
      method: 'POST',
      body: JSON.stringify(userData), // Adding headers to the request headers:
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `${accessToken}`,
      },
    }
  )
  data = await response.json()
}

module.exports.follow = async (userID, followUserID, data) => {
  const accessToken = sessionStorage.getItem('app_token')
  const userData = { userID, followUserID }
  const response = await fetch(
    `https://codeverse-backend.onrender.com/follow`,
    {
      method: 'POST',

      body: JSON.stringify(userData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `${accessToken}`,
      },
    }
  )
  data = await response.json()
}

module.exports.getFollowers = async (userID, list) => {
  const accessToken = sessionStorage.getItem('app_token')
  const userInfo = { email: userID }
  const response = await fetch(
    `https://codeverse-backend.onrender.com/getFollowers`,
    {
      method: 'POST',

      body: JSON.stringify(userInfo), // Adding headers to the request headers:
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `${accessToken}`,
      },
    }
  )
  const data = await response.json()
  list.data = data.list
}

module.exports.getProfile = async (userID, userProfile) => {
  const accessToken = sessionStorage.getItem('app_token')
  const userInfo = { email: userID }
  const response = await fetch(
    `https://codeverse-backend.onrender.com/getProfile`,
    {
      method: 'POST',
      body: JSON.stringify(userInfo), // Adding headers to the request headers:
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `${accessToken}`,
      },
    }
  )
  if (response.status === 500) {
    const error = new Error('Profile not Found')
    error.code = 999
    throw error
  }
  const data2 = await response.json()
  userProfile.data = data2.userProfile
}

module.exports.updateProfile = async (userProfile) => {
  const accessToken = sessionStorage.getItem('app_token')
  const response = await fetch(
    `https://codeverse-backend.onrender.com/profile`,
    {
      method: 'POST',
      // Adding body or contents to send
      body: JSON.stringify(userProfile.data), // Adding headers to the request headers:
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `${accessToken}`,
      },
    }
  )
  const data = await response.json()
  userProfile.data = data
}

module.exports.createUser = async (user, userProfile) => {
  const accessToken = sessionStorage.getItem('app_token')
  const response = await fetch(
    `https://codeverse-backend.onrender.com/createUser`,
    {
      method: 'POST',
      body: JSON.stringify(user), // Adding headers to the request headers:
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `${accessToken}`,
      },
    }
  )
  const data = await response.json()
  userProfile.data = data
}

module.exports.createProject = async (userProject, test) => {
  try {
    const accessToken = sessionStorage.getItem('app_token')
    const response = await fetch(
      `https://codeverse-backend.onrender.com/newProject`,
      {
        method: 'PATCH',
        body: JSON.stringify(userProject),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: `${accessToken}`,
        },
      }
    )
    const data = await response.json()
    const final = data.projects.length - 1
    test.push(data.projects[final]._id)
    userProject = data
    window.alert('Project created.')
  } catch (error) {
    window.alert('Error creating project!')
  }
}

module.exports.getProjects = async (mongoID, projects) => {
  try {
    const accessToken = sessionStorage.getItem('app_token')
    const userInfo = { _id: mongoID }
    const response = await fetch(
      `https://codeverse-backend.onrender.com/getProjects`,
      {
        method: 'POST',
        body: JSON.stringify(userInfo), // Adding headers to the request headers:
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: `${accessToken}`,
        },
      }
    )
    const data = await response.json()
    if (response.status === 500) throw response.error
    const parsed = JSON.parse(JSON.stringify(data.projects))
    const forDisplay = parsed.splice(0, 6)
    projects.push(...forDisplay)
  } catch (error) {}
}
module.exports.getFollowingProjects = async (mongo_id, projects) => {
  const accessToken = sessionStorage.getItem('app_token')
  const userInfo = { _id: mongo_id }
  const response = await fetch(
    `https://codeverse-backend.onrender.com/getFollowingProjects`,
    {
      method: 'POST',
      body: JSON.stringify(userInfo), // Adding headers to the request headers:
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `${accessToken}`,
      },
    }
  )
  const data = await response.json()
  const parsed = JSON.parse(JSON.stringify(data))
  const forDisplay = parsed.splice(0, 10)
  projects.push(...forDisplay)
}

module.exports.getTrendingProjects = async (project) => {
  const accessToken = sessionStorage.getItem('app_token')
  const response = await fetch(
    `https://codeverse-backend.onrender.com/getTrendingProjects`,
    {
      method: 'GET',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `${accessToken}`,
      },
    }
  )
  const data = await response.json()
  const parsed = JSON.parse(JSON.stringify(data))
  const forDisplay = parsed.splice(0, 10)
  project.push(...forDisplay)
}

module.exports.addLike = async (projectInfo, email) => {
  const accessToken = sessionStorage.getItem('app_token')
  const pushInfo = {
    userID: projectInfo.user_id,
    _id: projectInfo._id,
    projectTitle: projectInfo.projects.project_title,
    followUserID: email,
  }
  const response = await fetch(
    `https://codeverse-backend.onrender.com/addLike`,
    {
      method: 'POST',
      body: JSON.stringify(pushInfo),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `${accessToken}`,
      },
    }
  )
  // window.alert('Like added.')
}

module.exports.removeLike = async (projectInfo, email) => {
  const accessToken = sessionStorage.getItem('app_token')
  const pushInfo = {
    userID: projectInfo.user_id,
    _id: projectInfo._id,
    projectTitle: projectInfo.projects.project_title,
    followUserID: email,
  }
  const response = await fetch(
    `https://codeverse-backend.onrender.com/removeLike`,
    {
      method: 'POST',
      body: JSON.stringify(pushInfo),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `${accessToken}`,
      },
    }
  )
  // window.alert('Like removed.')
}

module.exports.updateProject = async (payload) => {
  try {
    const accessToken = sessionStorage.getItem('app_token')
    const response = await fetch(
      `https://codeverse-backend.onrender.com/project`,
      {
        method: 'PATCH',
        // Adding body or contents to send
        body: JSON.stringify(payload), // Adding headers to the request headers:
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: `${accessToken}`,
        },
      }
    )
    window.alert('Project updated.')
  } catch (error) {
    window.alert('Error updating project!')
  }
}

module.exports.deleteProject = async (payload) => {
  try {
    const accessToken = sessionStorage.getItem('app_token')
    const response = await fetch(
      `https://codeverse-backend.onrender.com/deleteProject`,
      {
        method: 'DELETE',
        // Adding body or contents to send
        body: JSON.stringify(payload), // Adding headers to the request headers:
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: `${accessToken}`,
        },
      }
    )
    window.alert('Project deleted.')
  } catch (error) {
    window.alert('Error deleting project!')
  }
}
module.exports.searchProjects = async (searchArguments, projects) => {
  try {
    const accessToken = sessionStorage.getItem('app_token')
    const SearchArgs = { projectTitle: searchArguments }
    const response = await fetch(
      `https://codeverse-backend.onrender.com/searchProjects`,
      {
        method: 'POST',
        body: JSON.stringify(SearchArgs), // Adding headers to the request headers:
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          Authorization: `${accessToken}`,
        },
      }
    )
    const data = await response.json()
    data.forEach((obj) => {
      projects.push(obj)
    })
  } catch (error) {
    window.alert('Error searching projects.')
  }
}

module.exports.login = async (user) => {
  try {
    const username = { username: user }
    const response = await fetch(
      `https://codeverse-backend.onrender.com/login`,
      {
        method: 'POST',

        body: JSON.stringify(username),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    )
    const data = await response.json()
    sessionStorage.setItem('app_token', data)
  } catch (error) {
    window.alert('Error with login.')
  }
}
