 

window.gAccessToken ='';

module.exports.getFollowing = async (userID, info) => {

    const userInfo = { email: userID }
    const response = await fetch(`http://localhost:5000/getFollowing`, {
      method: 'POST',
      // Adding body or contents to send
      body: JSON.stringify(userInfo), // Adding headers to the request headers:
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `${window.gAccessToken}`,
      },
    })

    const data = await response.json()

    info.data = data.list
   
}

module.exports.getFollowInfo = async (userID, followUserID, followInfo) => {
    
    const userInfo = { userID, followUserID }
    const response = await fetch(`http://localhost:5000/getFollowInfo`, {
      method: 'POST',
      // Adding body or contents to send
      body: JSON.stringify(userInfo), // Adding headers to the request headers:
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': `${window.gAccessToken}`,
      },
    })

    const data = await response.json()

    followInfo.following = data.following
    followInfo.followedby = data.followedby
    

}

module.exports.getInfo = async (userID, info) => {
  
    const userInfo = { userID }
    const response = await fetch(`http://localhost:5000/getInfo`, {
      method: 'POST',
      body: JSON.stringify(userInfo), // Adding headers to the request headers:
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `${window.gAccessToken}`,
      },
    })

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
  
    const userData = { userID, unfollowUserID }
    const response = await fetch(`http://localhost:5000/unFollow`, {
      method: 'POST',
      body: JSON.stringify(userData), // Adding headers to the request headers:
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `${window.gAccessToken}`,
      },
    })
    data = await response.json()
  
}

module.exports.follow = async (userID, followUserID, data) => {

    const userData = { userID, followUserID }
    const response = await fetch(`http://localhost:5000/follow`, {
      method: 'POST',

      body: JSON.stringify(userData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': `${window.gAccessToken}`,
      },
    })

    data = await response.json()
  
}

module.exports.getFollowers = async (userID, list) => {
 
    const userInfo = { email: userID }
    const response = await fetch(`http://localhost:5000/getFollowers`, {
      method: 'POST',

      body: JSON.stringify(userInfo), // Adding headers to the request headers:
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `${window.gAccessToken}`,
      },
    })

    const data = await response.json()
    list.data = data.list

}

module.exports.getProfile = async (userID, userProfile) => {
  
    
      
    const userInfo = { email: userID }
    const response = await fetch(`http://localhost:5000/getProfile`, {
      method: 'POST',
      body: JSON.stringify(userInfo), // Adding headers to the request headers:
      headers: { 'Content-type': 'application/json; charset=UTF-8' ,
                 'Authorization':  `${window.gAccessToken}` },
    })
    if (response.status === 999)
    { const error = new Error("Profile not Found")
      error.code = 999
      throw error
  }
    const data2 = await response.json()
    
    // if (response.status === 500) throw response.error
    userProfile.data = data2.userProfile
  
}

module.exports.updateProfile = async (userProfile) => {
  
    const response = await fetch(`http://localhost:5000/profile`, {
      method: 'POST',
      // Adding body or contents to send
      body: JSON.stringify(userProfile.data), // Adding headers to the request headers:
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `${window.gAccessToken}`,
      },
    })
    const data = await response.json()
    userProfile.data = data // JSON.stringify(data)
 
}

module.exports.createUser = async (user, userProfile) => {
   // const userInfo = {  user }
    const response = await fetch(`http://localhost:5000/createUser`, {
      method: 'POST',
      body: JSON.stringify(user), // Adding headers to the request headers:
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': `${window.gAccessToken}`,
      },
    })
    const data = await response.json()
    userProfile.data = data
       // if (response.status === 500) throw response.error

  
  
}

module.exports.createProject = async (userProject) => {
  try {
    const response = await fetch(`http://localhost:5000/newProject`, {
      method: 'PATCH',
      body: JSON.stringify(userProject),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `${window.gAccessToken}`,
      },
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
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `${window.gAccessToken}`,
      },
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
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `${window.gAccessToken}`,
      },
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
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: `${window.gAccessToken}`,
    },
  })
  const data = await response.json()
  const parsed = JSON.parse(JSON.stringify(data))
  const forDisplay = parsed.splice(0, 10)
  projects.push(...forDisplay)
}

module.exports.getTrendingProjects = async (project) => {
  const response = await fetch(`http://localhost:5000/getTrendingProjects`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: `${window.gAccessToken}`,
    },
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
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: `${window.gAccessToken}`,
    },
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
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: `${window.gAccessToken}`,
    },
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
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `${window.gAccessToken}`,
      },
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
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `${window.gAccessToken}`,
      },
    })
    const data = await response.json()
  } catch (error) {
    window.alert('error')
  }
}


module.exports.searchProjects = async (searchArguments, projects) => {
  try {
    const SearchArgs = { projectTitle: searchArguments }
    const response = await fetch(`http://localhost:5000/searchProjects`, {
      method: 'POST',
      body: JSON.stringify(SearchArgs), // Adding headers to the request headers:
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `${window.gAccessToken}`,
      },
    })
    const data = await response.json()
    const parsed = JSON.parse(JSON.stringify(data))
    // this.uniqueID = data.uniqu;
    projects.push(...parsed)
    // window.alert(JSON.stringify(projects.list))
  } catch (error) {}
}

module.exports.login = async (user) => {
  // replace code with access token
   try {
     const username = { username: user }
    
     const response = await fetch(`http://localhost:5000/login`, {
       method: 'POST',

       body: JSON.stringify(username),
       headers: {
         'Content-type': 'application/json; charset=UTF-8',
         
       },
     })

     const data = await response.json()
  //  window.alert('token1')
  //    // need to get access token from auth0
  //   window.alert("token")
  window.gAccessToken = data 
    
     
  } catch (error) {
     window.alert(error)
   }
}
