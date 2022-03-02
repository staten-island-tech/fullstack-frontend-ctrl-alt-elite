<template>
  <div id="show-projectss">
    <h1>All Project Articles</h1>
    <div v-for="project in projects" :key="project" class="single-project">
      <h2>{{ project.title }}</h2>
      <article>{{ project.body }}</article>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [],
    }
  },
  methods: {},
  created() {
    this.$http
      .get('http://jsonplaceholder.typicode.com/posts')
      .then(function (data) {
        this.projects = data.body.slice(0, 10)
      })
  },
}
</script>

<style>
#show-projects {
  max-width: 800px;
  margin: 0px auto;
}
.single-project {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
