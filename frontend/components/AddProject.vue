<template>
  <div id="show-projectss">
    <h1>All Project Articles</h1>
    <div v-for="project in projects" :key="project" class="single-project">
      <h2 class="t1"> {{project.title }}</h2>
      <article class="body">{{project.body}} </article>
    </div>
  </div>
</template>
<script >
export default {
  data() {
    return {
      projects: [],
      search: ""
    }
  },
  async mounted() {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const newData = await data.json();
    this.projects = newData;
  },
}
</script>

<style>
#show-projects {
  max-width: 800px;
  margin: 0px auto;
}
.t1 {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  color: white;
  text-align: center;
}
.body{
  text-align: center;
  align-items: center;
  color: white;
}
</style>