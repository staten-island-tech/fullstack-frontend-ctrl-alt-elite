<template>
  <div class="bg-black h-full ">
    <WelcomingNavBar class="z-10 duration-75 md:text-lg text-xs"/>   
    <section id="welcoming-page" class="md:p-24 p-0"> 
      <div class="flex flex-row md:justify-start justify-center items-center h-5/6 mx-16 md:mx-0" data-aos="fade-right">
        <div class="m-1 2xl:w-1/3 xl:w-1/3 lg:w-1/3 md:w-1/2 flex items-center justify-center flex-col md:items-start md:justify-around">
          <h1 class="text-white uppercase font-bold 2xl:text-5xl xl:text-5xl lg:text-4xl md:text-4xl sm:text-3xl text-center md:text-left text-3xl">This is the welcoming page.</h1>
          <p class="text-center md:text-left text-white 2xl:text-xl xl:text-lg lg:text-lg md:text-lg sm:text-base my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga modi accusamus adipisci rem est perspiciatis odio.</p>
          <SignupButton class="text-white border h-10 w-2/3 sm:w-1/2 md:w-1/2 2xl:w-1/3 ml-0 2xl:text-xl xl:text-xl text-sm">Sign up today!</SignupButton>
        </div>  
      </div>
    </section>
    <!-- <section class="h-screen flex items-center flex-col">
      <h2 class="text-white text-5xl font-bold uppercase m-10" data-aos="fade-up">Welcoming Page Info</h2>
      <div class="h-2/3 w-11/12 m-10 mx-20" data-aos="fade-right">
        <div class="h-full w-1/3 bg-white"></div>
      </div>
      <div class="h-2/3 w-11/12 flex flex-row-reverse" data-aos="fade-left">
        <div class="h-full w-1/3 bg-white"></div>
      </div>
    </section> -->
    <!-- :class="{change_color: scrollPosition > 50}" -->
  </div>
</template>

<script>

import * as THREE from 'three'
import NET from 'vanta/dist/vanta.net.min'

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();



export default {
    

  data(){
    return{
      count: 0,
      scrollPosition: null,
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
      
  
    
      redirect() {
        if (this.$auth.loggedIn) {
          
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
/* 
  .change_color {
    transition-duration: .4s;
    background-color: rgba(255, 255, 255, 0.171);
  } */
</style>
