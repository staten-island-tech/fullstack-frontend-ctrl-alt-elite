<template>
  <div class="h-full">
    <WelcomingNavBar class="z-10 duration-75 md:text-lg text-xs" />   
    <section id="welcoming-page" class="md:p-24 p-0"> 
      <div class="flex flex-row md:justify-start justify-center items-center h-5/6 mx-16 md:mx-0" data-aos="fade-right">
        <div class="m-1 2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-1/2 flex items-center justify-center flex-col md:items-start md:justify-around">
          <h1 class="text-white uppercase font-bold 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-3xl text-center md:text-left text-3xl">Welcome to Codeverse.</h1>
          <p class="text-center md:text-left text-white 2xl:text-xl xl:text-lg lg:text-lg md:text-lg sm:text-base my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga modi accusamus adipisci rem est perspiciatis odio.</p>
          <SignupButton  class="text-white border h-10 w-2/3 sm:w-1/2 md:w-1/2 2xl:w-1/3 ml-0 2xl:text-xl xl:text-xl text-sm">Sign up today!</SignupButton>
        </div>  
      </div>
    </section> 
  </div>
</template>

<script>
import Snackbar from '../components/Snackbar.vue'
import * as THREE from 'three'
import NET from 'vanta/dist/vanta.net.min'
import AOS from 'aos';
import 'aos/dist/aos.css';
import DBFunctions from "~/DBFunctions";

AOS.init();

export default {
  data(){
    return{
      count: 0,
      scrollPosition: null,
      userProfile: { data: '' },
    }
  },      
  mounted() {
    this.redirect();
    this.vantaEffect = NET({
      el: "#welcoming-page",
      THREE,
      backgroundAlpha: 0,
      color: 0x8f5ede,
      points: 12.00,
    });
    window.addEventListener('scroll', this.updateScroll);
  },
  beforeDestroy() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy()
    }
  },
  methods: {
    async redirect() {
      if (this.$auth.loggedIn) {
        await DBFunctions.login(this.$auth.user.email);
          try { 
            await DBFunctions.getProfile(this.$auth.user.email,this.userProfile) 
          } catch (error) { 
            await DBFunctions.createUser(this.$auth.user,this.userProfile);
          }
        this.$router.push({path: 'home'});
      } else {
        this.$router.push({path: '/'});
      }
    },
    updateScroll() {
      this.scrollPosition = window.scrollY
    }
  }
}

</script>

<style scoped>
#welcoming-page {
  height: 100vh;
  /* background-image: url("./assets/welcoming-placeholder-bg.jpg"); */
  background-image:linear-gradient(rgb(0, 0, 0), rgba(0, 0, 0, 0.075)), url("./assets/welcoming-placeholder-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  /* clip-path: polygon(0 0, 100% 0, 100% 100%, 0 88%); */
}
</style>
