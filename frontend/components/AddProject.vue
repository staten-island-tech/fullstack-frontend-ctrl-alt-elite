<template>
  <div id="show-projectss">
    <h1>All Project Articles</h1>
    <div v-for="project in projects" :key="project" class="single-project">
      <h2 class="title"> {{project.title }}</h2>
      <article class="body">{{project.body}} </article>
    </div>
  </div>
</template>
<script >
export default {
  data() {
    return {
      projects: [
        
      ],
      search: ""
    }
  },
  async mounted() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const newData = await data.json();
    console.log(newData)
    this.projects = newData;
  },
}
</script>
<style>
#show-projects {
  max-width: 800px;
  margin: 0px auto;
}
.title {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
.body{
  color: white;
  background-color: black;
}
</style>
