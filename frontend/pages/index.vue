<template>
  <section id="welcoming-page">
    <WelcomingNavBar/>
    <!-- <img src="../assets/pic.svg" class="h-32"> -->
    <div class="flex flex-row items-center h-5/6">
      <div class="ml-20 w-1/2">
        <h1 class="text-white uppercase font-bold text-7xl">This is the welcoming page.</h1>
        <p class="text-white text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga modi accusamus adipisci rem est perspiciatis odio. Aspernatur tenetur quis recusandae officiis quae quas aperiam quidem eos eveniet. Odit, quisquam ut!</p>
        <SignupButton class="text-white border-2 h-8 px-6 rounded-md border py-1 w-1/3 mt-5">Sign up today!</SignupButton>
      </div>  
      <!-- <img class="h-72 mr-20" src="../assets/undraw_programmer_re_owql.svg"> -->
    </div>
  </section>
</template>

<script>
import SignupButton from '../components/SignupButton.vue';
export default {
  components: { SignupButton },
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