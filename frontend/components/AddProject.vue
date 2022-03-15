<template>
  <div id="show-projectss">
    <h1>All Project Articles</h1>
    <div v-for="project in methods" :key="project" class="single-project">
      <h2> {{}}</h2>
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
  methods:{
    fecthData: async function(){
      try{
        const data = await fetch('http://jsonplaceholder.typicode.com/posts');
        const newData= await data.json()
        console.log(newData);
        this.projects = newData;
      } catch (error){
        alert("Error Moment");
        return;
      }

        

        
      
      }

  },

  mounted() {
   /*  this.$http
      .get('http://jsonplaceholder.typicode.com/posts')
      .then(function (data) {
        this.projects = data.body.slice(0, 10)
      }) */
    
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