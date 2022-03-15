<template>
  <div class="bg-black h-full">
    <WelcomingNavBar class="z-10 duration-75" :class="{change_color: scrollPosition > 50}"/>   
    <section id="welcoming-page"> 
      <div class="flex flex-row items-center h-5/6" data-aos="fade-right">
        <div class="m-0 ml-20 w-1/3">
          <h1 class="text-white uppercase font-bold text-6xl">This is the welcoming page.</h1>
          <p class="text-white text-xl my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga modi accusamus adipisci rem est perspiciatis odio. Aspernatur tenetur quis recusandae officiis quae quas aperiam quidem eos eveniet. Odit, quisquam ut!</p>
          <SignupButton class="text-white border-2 h-10 rounded-md w-1/3 ml-0">Sign up today!</SignupButton>
         </div>  
      </div>
    </section>
    <section class="h-screen flex items-center flex-col">
      <h2 class="text-white text-5xl font-bold uppercase m-10" data-aos="fade-up">Welcoming Page Info</h2>
      <div class="h-2/3 w-11/12 m-10 mx-20" data-aos="fade-right">
        <div class="h-full w-1/3 bg-white"></div>
      </div>
      <div class="h-2/3 w-11/12 flex flex-row-reverse" data-aos="fade-left">
        <div class="h-full w-1/3 bg-white"></div>
      </div>
    </section>
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
      points: 9.00,
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
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 88%);
  }

  .change_color {
    transition-duration: .4s;
    background-color: rgba(255, 255, 255, 0.171);
  }
</style>