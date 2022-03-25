<template>
  <div>
    <div class="temp1">
      <p class="menu">Menu</p>
      <p class="logo">Logo</p>
      <p class="New-Project">New Project</p>
    </div>
    <div class="Your-projects">
      <div class="search">Your Projects</div>
      <div class="search-bar">
        <input
          type="text"
          :v-model="search"
          placeholder="Find a Project"
          class="actual-bar"/>
      </div>
    </div>
    <div v-for="project in filteredProjects" :key="project">
      <h2>{{project.title}}</h2>
      <article class="body">{{project.body}}</article>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [],
      search: '',
    }
  },
  async mounted() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const newData = await data.json();
    const finalData = newData.slice(0,10)
    console.log(finalData)
    this.projects = finalData
  
  },
  computed: {
    filteredProjects() {
      return this.projects.filter((project) => {
        return project.title.match(this.search)
      })
    },
  },

  /* methods: {
    post() {
      fetch('http://jsonplaceholder.typicode.com/posts', {
        title: this.project.title,
        body: this.project.body,
        userId: 1,
      }).then(function (data) {
        console.log(data)
        this.submitted = true
      })
    },
  }, */
}
</script>

<style>
body {
  background: linear-gradient(#1c1c1c, #1f0180);
  height: 100vh;
}

.temp1 {
  background-color: #190061;
  opacity: 85%;
  font-family: 'Courier New', Courier, monospace;
  color: #e6e6e6;
  font-size: 3rem;
  text-align: left;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  font-weight: bold;
}
menu:hover {
  transform: scale(1.1);
  cursor: pointer;
}
.view-projects {
  height: 20vh;
  margin-top: 2rem;
  justify-content: center;
  text-align: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  opacity: 0.7;
}
.more-projects {
  font-family: 'Courier New', Courier, monospace;
  font-size: 2rem;
  font-weight: bold;
  width: 20vw;
  margin: 1rem;
  border: solid black 0.3rem;
  background-color: blanchedalmond;
}
.your-projects {
  display: flex;
  flex-direction: row;
  width: 100vh;
  align-items: center;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
}
.search-bar {
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
  font-size: 1.2rem;
}
.search {
  font-size: 2rem;
  font-family: 'Courier New', Courier, monospace;
  color: #e6e6e6;
  text-align: center;
  align-items: center;
  font-weight: 700;
}
.actual-bar {
  font-family: 'Courier New', Courier, monospace;
  font-weight: 500;
  text-align: center;
  background-color: black;
  color: white;
}
</style>
