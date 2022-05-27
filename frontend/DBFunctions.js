module.exports.getFollowing = async (userID, info) => {
  try {
    // window.alert("info")
    // window.alert(JSON.stringify(info))
    const userInfo = { email: userID }
    const response = await fetch(`http://localhost:5000/getFollowing`, {
      method: 'POST',
      // Adding body or contents to send
      body: JSON.stringify(userInfo), // Adding headers to the request headers:
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })

    const data = await response.json()

    info.data = data.list
  } catch (error) {
    window.alert(error)
  }
}

module.exports.getFollowInfo = async (userID, followUserID, followInfo) => {
  try {
    const userInfo = { userID, followUserID }
    const response = await fetch(`http://localhost:5000/getFollowInfo`, {
      method: 'POST',
      // Adding body or contents to send
      body: JSON.stringify(userInfo), // Adding headers to the request headers:
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })

    const data = await response.json()

    followInfo.following = data.following
    followInfo.followedby = data.followedby
  } catch (error) {
    window.alert(error)
  }
}

module.exports.getInfo = async (userID, info) => {
  try {
    const userInfo = { userID }
    const response = await fetch(`http://localhost:5000/getInfo`, {
      method: 'POST',
      body: JSON.stringify(userInfo), // Adding headers to the request headers:
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })

    const data = await response.json()
    info.following = data.following
    info.followers = data.followers
    info.projects = data.projects
    info.name = data.name
    info.profilePic = data.profilePic
    info.mongoID = data.mongoID
    info.userID = data.userID
  } catch (error) {
    window.alert(error)
  }
}

module.exports.unFollow = async (userID, unfollowUserID, data) => {
  try {
    const userData = { userID, unfollowUserID }
    const response = await fetch(`http://localhost:5000/unFollow`, {
      method: 'POST',
      body: JSON.stringify(userData), // Adding headers to the request headers:
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
    data = await response.json()
  } catch (error) {}
}

module.exports.follow = async (userID, followUserID, data) => {
  try {
    const userData = { userID, followUserID }
    const response = await fetch(`http://localhost:5000/follow`, {
      method: 'POST',

      body: JSON.stringify(userData),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })

    data = await response.json()
  } catch (error) {}
}

module.exports.getFollowers = async (userID, list) => {
  try {
    const userInfo = { email: userID }
    const response = await fetch(`http://localhost:5000/getFollowers`, {
      method: 'POST',

      body: JSON.stringify(userInfo), // Adding headers to the request headers:
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })

    const data = await response.json()
    list.data = data.list
  } catch (error) {}
}

// module.exports.updatePhoto = async () => {
//   const userPhoto = { profile_pic: userID }
//   const response = await fetch('https://localhost:5000/updatePhoto')
// }

module.exports.getProfile = async (userID, userProfile) => {
  try {
    const userInfo = { email: userID }
    const response = await fetch(`http://localhost:5000/getProfile`, {
      method: 'POST',
      body: JSON.stringify(userInfo), // Adding headers to the request headers:
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
    const data2 = await response.json()
    if (response.status === 500) throw response.error
    userProfile.data = data2.userProfile
  } catch (error) {
    throw error
  }
}

module.exports.updateProfile = async (userProfile) => {
  try {
    const response = await fetch(`http://localhost:5000/profile`, {
      method: 'POST',
      // Adding body or contents to send
      body: JSON.stringify(userProfile.data), // Adding headers to the request headers:
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
    const data = await response.json()
    userProfile.data = data // JSON.stringify(data)
  } catch (error) {
    window.alert('error')
  }
}

module.exports.createUser = async (userProfile) => {
  try {
    const response = await fetch(`http://localhost:5000/createUser`, {
      method: 'POST',
      body: JSON.stringify(userProfile), // Adding headers to the request headers:
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
    const data = await response.json()
    userProfile = data
  } catch (error) {
    window.alert(error)
  }
}

module.exports.createProject = async (userProject) => {
  try {
    const response = await fetch(`http://localhost:5000/newProject`, {
      method: 'PATCH',
      body: JSON.stringify(userProject),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
    const data = await response.json()
    userProject = data
  } catch (error) {
    window.alert(error)
  }
}

module.exports.getProjects = async (mongoID, projects) => {
  try {
    const userInfo = { _id: mongoID }
    const response = await fetch(`http://localhost:5000/getProjects`, {
      method: 'POST',
      body: JSON.stringify(userInfo), // Adding headers to the request headers:
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
    const data = await response.json()
    if (response.status === 500) throw response.error
    const parsed = JSON.parse(JSON.stringify(data.projects))
    const forDisplay = parsed.splice(0, 6)

    projects.push(...forDisplay)
  } catch (error) {}
}

module.exports.getProjects2 = async (mongoID, projects) => {
  try {
    const userInfo = { _id: mongoID }
    const response = await fetch(`http://localhost:5000/getProjects`, {
      method: 'POST',
      body: JSON.stringify(userInfo), // Adding headers to the request headers:
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
    const data = await response.json()
    if (response.status === 500) throw response.error
    projects.list = data.projects
  } catch (error) {}
}
module.exports.getFollowingProjects = async (mongo_id, projects) => {
  const userInfo = { _id: mongo_id }
  const response = await fetch(`http://localhost:5000/getFollowingProjects`, {
    method: 'POST',
    body: JSON.stringify(userInfo), // Adding headers to the request headers:
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  })
  const data = await response.json()
  const parsed = JSON.parse(JSON.stringify(data))
  const forDisplay = parsed.splice(0, 10)
  projects.push(...forDisplay)
}

module.exports.getTrendingProjects = async (project) => {
  const response = await fetch(`http://localhost:5000/getTrendingProjects`, {
    method: 'GET',
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  })
  const data = await response.json()
  const parsed = JSON.parse(JSON.stringify(data))
  const forDisplay = parsed.splice(0, 10)
  project.push(...forDisplay)
}

module.exports.addLike = async (projectInfo, email) => {
  const pushInfo = {
    userID: projectInfo.user_id,
    _id: projectInfo._id,
    projectTitle: projectInfo.projects.project_title,
    followUserID: email,
  }
  const response = await fetch(`http://localhost:5000/addLike`, {
    method: 'POST',
    body: JSON.stringify(pushInfo),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  })
  const data = await response.json()
  const parsed = JSON.parse(JSON.stringify(data))
}

module.exports.removeLike = async (projectInfo, email) => {
  const pushInfo = {
    userID: projectInfo.user_id,
    _id: projectInfo._id,
    projectTitle: projectInfo.projects.project_title,
    followUserID: email,
  }
  const response = await fetch(`http://localhost:5000/removeLike`, {
    method: 'POST',
    body: JSON.stringify(pushInfo),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  })
  const data = await response.json()
  const parsed = JSON.parse(JSON.stringify(data))
}

module.exports.updateProject = async (payload) => {
  try {
    const response = await fetch(`http://localhost:5000/project`, {
      method: 'PATCH',
      // Adding body or contents to send
      body: JSON.stringify(payload), // Adding headers to the request headers:
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
    const data = await response.json()
  } catch (error) {
    window.alert('error')
  }
}

module.exports.deleteProject = async (payload) => {
  try {
    const response = await fetch(`http://localhost:5000/deleteProject`, {
      method: 'DELETE',
      // Adding body or contents to send
      body: JSON.stringify(payload), // Adding headers to the request headers:
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
    const data = await response.json()
  } catch (error) {
    window.alert('error')
  }
}

 //module.exports.searchProjects = async(searchArguments,projects) => {
   //  try {
//       // window.alert("dbfunction")
//       // window.alert(searchArguments)
//       const SearchArgs = { projectTitle: searchArguments }
//       const response = await fetch(`http://localhost:5000/searchProjects`, {
//         method: 'POST',

// module.exports.unFollow = async (userID, unfollowUserID, data) => {
//   try {
//     const userData = { userID, unfollowUserID }
//     const response = await fetch(`http://localhost:5000/unFollow`, {
//       method: 'POST',
//       body: JSON.stringify(userData), // Adding headers to the request headers:
//       headers: { 'Content-type': 'application/json; charset=UTF-8' },
//     })

//     data = await response.json()
//   } catch (error) {}
// }

// module.exports.follow = async (userID, followUserID, data) => {
//   try {
//     const userData = { userID, followUserID }
//     const response = await fetch(`http://localhost:5000/follow`, {
//       method: 'POST',

//       body: JSON.stringify(userData),
//       headers: { 'Content-type': 'application/json; charset=UTF-8' },
//     })

//     data = await response.json()
//   } catch (error) {}
// }

// module.exports.getFollowers = async (userID, list) => {
//   try {
//     const userInfo = { email: userID }
//     const response = await fetch(`http://localhost:5000/getFollowers`, {
//       method: 'POST',

//       body: JSON.stringify(userInfo), // Adding headers to the request headers:
//       headers: { 'Content-type': 'application/json; charset=UTF-8' },
//     })

//     const data = await response.json()
//     list.data = data.list
//   } catch (error) {}
// }

// module.exports.updatePhoto = async () => {
//   const userPhoto = { profile_pic: userID};
//   const response  = await fetch ('https://localhost:5000/updatePhoto')
// }

//         body: JSON.stringify(SearchArgs), // Adding headers to the request headers:
//         headers: { 'Content-type': 'application/json; charset=UTF-8' },
//       })

//       const data = await response.json();
//       // this.uniqueID = data.uniqu;
//       projects.list= data
//       window.alert(JSON.stringify(projects.list))

//     } catch (error) {

// module.exports.getProfile = async (userID, userProfile) => {
//   try {
//     const userInfo = { email: userID }
//     const response = await fetch(`http://localhost:5000/getProfile`, {
//       method: 'POST',

//       body: JSON.stringify(userInfo), // Adding headers to the request headers:
//       headers: { 'Content-type': 'application/json; charset=UTF-8' },
//     })

//     const data = await response.json()
//     if (response.status === 500) throw response.error

//     userProfile.data = data.userProfile
//   } catch (error) {
//     throw error
//   }
// }

// module.exports.updateProfile = async (userProfile) => {
//   try {
//     const response = await fetch(`http://localhost:5000/profile`, {
//       method: 'POST',
//       // Adding body or contents to send
//       body: JSON.stringify(userProfile.data), // Adding headers to the request headers:
//       headers: { 'Content-type': 'application/json; charset=UTF-8' },
//     })
//     const data = await response.json()

//     userProfile.data = data // JSON.stringify(data)
//   } catch (error) {
//     window.alert('error')
//   }
// }

// module.exports.createUser = async (userProfile) => {
//   try {
//     const response = await fetch(`http://localhost:5000/createUser`, {
//       method: 'POST',
//       body: JSON.stringify(userProfile), // Adding headers to the request headers:
//       headers: { 'Content-type': 'application/json; charset=UTF-8' },
//     })

//     const data = await response.json()
//     userProfile = data
//   } catch (error) {
//     window.alert(error)
//   }
// }

module.exports.searchProjects = async (searchArguments, projects) => {
  try {
    const SearchArgs = { projectTitle: searchArguments }
    const response = await fetch(`http://localhost:5000/searchProjects`, {
      method: 'POST',
      body: JSON.stringify(SearchArgs), // Adding headers to the request headers:
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })
    const data = await response.json()
    console.log(data)
    data.forEach(obj => {
      projects.push(obj)
    })
    // this.uniqueID = data.uniqu;
   // projects.list = data
    // window.alert(JSON.stringify(projects.list))
  } catch (error) {}
}
