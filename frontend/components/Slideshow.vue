<template>
    <!-- <div class="swiper-button-prev"></div> -->
    <div class="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <ProjectCard class="slider-content"/>
          <ProjectCard class="slider-content"/>
          <ProjectCard class="slider-content"/>
          <ProjectCard class="slider-content"/>
          <ProjectCard class="slider-content"/>
          <ProjectCard class="slider-content"/>
        </div>
        <!-- <div v-for="i in 6" :key="i" class="swiper-slide" :class="`slide--${i}`">
          <div class="slider-content">Slide {{ i }}</div>
        </div> -->
      </div>
    
      <!-- <div class="swiper-pagination"></div> -->
    </div>
    <!-- <div class="swiper-button-next"></div> -->
</template>

<script>
// Import Swiper Vue.js components
import { Swiper,FreeMode, Navigation, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'

export default {
      mounted() {
    // configure Swiper to use modules. The modules were tested with SwiperJS v6.8.4 with NuxtJS v2.15.7
    // previously it was before export default. Moved here for performance issues. Move back in case of problems.
    // add or remove unused modules
    Swiper.use([ Navigation, FreeMode, Autoplay])
    
    // init Swiper:
    /* eslint-disable no-unused-vars */
    const swiper = new Swiper('.swiper', {
      // Optional parameters
      // @see https://swiperjs.com/swiper-api#parameters
      direction: 'horizontal',
      freeMode: true,
      // remove unused modules if needed
      modules: [Navigation, FreeMode, Autoplay],
      // Pagination if needed
      // pagination: {
      //   el: '.swiper-pagination',
      //   type: 'bullets',
      //   clickable: true
      // },
    
      autoplay: {
        delay: 3000
      },
     
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev'
      // }
      
    })
  }
};
</script>

<style scoped>
.swiper {
  height: 300px;
  overflow: hidden;
  position: relative;
  width: 90vw;
}
.swiper-slide {
  align-items: center;
  display: flex;
  justify-content: center;
  width: 50%;
}
.slider-content {
  color: #000;
}
.slide--1 {
  background-color: #f1c40f;
}
.slide--2 {
  background-color: #e67e22;
}
.slide--3 {
  background-color: #e74c3c;
}
.slide--4 {
  background-color: #9b59b6;
}
.slide--5 {
  background-color: #3498db;
}
.slide--6 {
  background-color: #2ecc71;
}
</style>