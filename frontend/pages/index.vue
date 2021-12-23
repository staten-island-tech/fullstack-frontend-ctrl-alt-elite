<template>
  <section id="welcoming-page">
    <WelcomingNavBar/>
  </section>
</template>

<script>
export default {
  data(){
    return{
      count: 0
    }
  },
  methods: {
    test: function test(){
      this.count++
    }
  }
}
</script>

<style scoped>
  #welcoming-page {
    height: 100vh;
    background-image: url("./assets/welcoming-placeholder.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>