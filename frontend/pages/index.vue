<template>
  <section id="welcoming-page">
    <WelcomingNavBar/>
    <!-- <img src="../assets/pic.svg" class="h-32"> -->
    <div class="flex flex-row">>
      <div>
        <h1 class="text-white">This is the welcoming page.</h1>
        <p class="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga modi accusamus adipisci rem est perspiciatis odio. Aspernatur tenetur quis recusandae officiis quae quas aperiam quidem eos eveniet. Odit, quisquam ut!</p>
      </div>  
      <img class="h-72" src="../assets/undraw_programmer_re_owql.svg">
    </div>
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
    background-image: url("./assets/welcoming-placeholder-bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>