<template>
  <section id="welcoming-page">
    <WelcomingNavBar/>
    <!-- <img src="../assets/pic.svg" class="h-32"> -->
  
  </section>
</template>

<script>
export default {
  data(){
    return{
      count: 0
    }
  },
  mounted() {
      this.redirect()
  },
  methods: {
    redirect() {
        if (this.$auth.loggedIn) {
          this.$router.push({path: 'Home'});
        }
      }
  }
}
</script>

<style scoped>
  #welcoming-page {
    height: 100vh;
    /* background-image: url("./assets/welcoming-placeholder.jpg"); */
    background-color: black;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>